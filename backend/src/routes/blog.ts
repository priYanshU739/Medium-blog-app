
import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt"
import { createBlogInput , updateBlogInput } from "@100xdevs/medium-common";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    jwt_secret: string,
  },
  Variables: {
    userId: string
  }
}>();

blogRouter.use('/*', async (c, next) => {
  try{
    const header = c.req.header("authorization") || "";
    const user = await verify(header, c.env.jwt_secret);

  if (user) {
    c.set("userId",user.id)
    await next();
  }
  }catch(e){
    return c.json({error:"unauthorized"})
  }
});


blogRouter.post('/', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

    try{
      const body = await c.req.json();
      const authorId = c.get("userId");
      const { success } = createBlogInput.safeParse(body)
      if(success){
        const blog = await prisma.post.create({
          data:{
              title:body.title,
              content:body.content,
              authorId:authorId
          }
      })
      return c.json({id:blog.id}) 
      }else{
        return c.json({error : "Wrong Inputs"})
      }
      
    }catch(e){
        console.log(e)
        return c.text("error")
    }
    
    
  })
  


blogRouter.put('/', async (c) => {

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      const blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({id:blog.id})
  })
  
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
    const allBlogs = await prisma.post.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });

    return c.json({blogs:allBlogs})
})
  
blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      try{
        const blog = await prisma.post.findFirst({
            where:{
                id:id
            },
            select:{
              id:true,
              title:true,
              content:true,
              author:{
                select:{
                  name:true
                }
              }
            }
        })
        return c.json({blog:blog});
      }catch(e){
        c.status(404);
        return c.json({msg:"Error while fetching blog post"});

      }
})


blogRouter.get('/myblogs', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
      const blog = await prisma.post.findFirst({
          where:{
              id:id
          },
          select:{
            id:true,
            title:true,
            content:true,
            author:{
              select:{
                name:true
              }
            }
          }
      })
      return c.json({blog:blog});
    }catch(e){
      c.status(404);
      return c.json({msg:"Error while fetching blog post"});

    }
})
  