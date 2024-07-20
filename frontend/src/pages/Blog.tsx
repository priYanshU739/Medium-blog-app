import { useParams } from 'react-router-dom';
import { FullBlog } from '../components/FullBlog';
import { useBlog } from '../hooks'
import { BlogSkeleton } from '../components/BlogSkeleton';
import { AppBar } from '../components/AppBar';

export const Blog =()=>{
    const { id } =useParams();
    const {loading,blog} = useBlog({
        id : id || ""});

    if(loading || !blog){
        return <div>
            <AppBar type="publish"/>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}