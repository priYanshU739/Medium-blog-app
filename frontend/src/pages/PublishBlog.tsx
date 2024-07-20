import { WriteBlog } from "../components/WriteBlog"
import { useBlogs } from "../hooks"
import { BlogCard } from "../components/BlogCard";

export const PublishBlog=()=>{

    const {blogs} = useBlogs();


    return <div>
        <WriteBlog />
    </div>
}