import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode , sign ,verify } from 'hono/jwt';
import { signupInput } from '@100xdevs/common-app';

export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL :string,
      jwt_secret :string,
      salt:string,
    }
  }>();  

userRouter.post('signup', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  try{
    
    const body = await c.req.json<{ email: string, password: string }>();
    const {success} = signupInput.safeParse(body);
    const findUser = await prisma.user.findFirst({
      where:{email:body.email}
    })
    if(findUser){
      return c.json({Msg:"User alredy Signed in"})
    }
    if(!success){
      return c.json({error:"Invalid Credentials",b:body})

    }
    if (success){
      const user = await prisma.user.create({
        data:{
          name:body.name,
          email:body.email,
          password:body.password,
        }
      })
  
      const token =await sign({id : user.id} ,c.env.jwt_secret) 
      return c.json({jwt:token,msg:"Sign up Successfull"})
    }
  }catch(e){
    c.status(404)
    return c.text("Error while Siggning in")
  }
  })
  
userRouter.post('signin',async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try{
    const body = await c.req.json<{ email: string, password: string }>();
    const {success} = signupInput.safeParse(body);

    const user = await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password,
      }
    })

    if(!user || !success){
      c.status(403)
      return c.json({msg:"Invalid credentials"})
    }

    const token = await sign({id:user.id},c.env.jwt_secret)
    return c.json({msg:"Signin Successfull",jwt:token})
    }catch(e){
      return c.json({error:'Error while Sign in'})
    }

  
})