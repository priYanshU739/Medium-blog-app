import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skeletons } from "../components/BlogsSkeletons";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{

    const {loading , blogs } =useBlogs();

    if(loading){
        return <div >
            <AppBar type="publish"/>
            <div className="flex justify-center w-full  ">
                <div>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                    <Skeletons/>
                </div>
                
            </div>
            
        </div>
    }
    return<div>
    <div>
        <AppBar type="publish"/>
    </div>
    
    <div className="flex justify-center w-full ">
        
        <div>
            {blogs.map(blog => <BlogCard 
            id={blog.id}
            authorName={blog.author.name || ""}
            title={blog.title || ""}
            content={blog.content || ""} 
            publishedDate="July, 19 2024"/>)}
        </div>
    </div>
    </div>
        
}