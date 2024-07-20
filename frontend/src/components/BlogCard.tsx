
import { Avatar } from './Avatar'
import { Link } from 'react-router-dom'

interface BlogCardProps{
    authorName:string;
    title:string;
    content : string;
    publishedDate:string;
    id : string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id,
}:BlogCardProps)=>{

    return <Link to={`/blog/${id}`}>
        <div  className='w-full cursor-pointer' >
        <div className="flex text-center pt-4 w-screen max-w-5xl ">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName.toUpperCase()}/>
            </div>
            
            <div className="font-medium flex justify-center flex-col text-base pl-2">
                {authorName}  
            </div>
            <div  className="flex justify-center flex-col pl-2">
                <div className="relative inline-flex items-center justify-center w-1 h-1 overflow-hidden rounded-full bg-black "></div>
            </div>
            
            <div className="text-slate-600 flex justify-center flex-col pl-2 font-normalf">
                 {publishedDate}
            </div>
        </div>
        
        <div className="text-2xl font-bold pt-2 ">
            {title}
        </div>
        <div className="font-serif text-slate-600 pt-2">
            {content.slice(0,100)+"...."}
        </div>
        <div className=" text-base text-slate-500 font-normal pt-8"> 
            {`${Math.ceil(content.length/100)} minutes`}
        </div>
        <div className='border-t-2 mt-6 mb-4 '> </div>
    </div>

    </Link>
    
}

