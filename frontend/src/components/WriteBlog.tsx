import { AppBar } from "./AppBar"
import {  useState  } from "react";
import {  useNavigate} from "react-router-dom"
import { CreatePostType  } from "@100xdevs/common-app";
import axios from "axios"
import { BACKEND_URL } from "../config";

export const WriteBlog=()=>{
   
    const navigate = useNavigate();
    const [publishedTitle ,setPublishedTitle ] = useState< CreatePostType>({
        title:"",
        content:"",
    });

    async function sendRequest(){
        try{
            const response = await axios.post (`${BACKEND_URL}/api/v1/blog`,publishedTitle,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
            alert("Blog Published Successfully")
        }catch(e){
            alert("Something went wrong")
        }
    }
    
    return <div>
        
        <div>
            <AppBar type="notpublish"/>
        </div>
        <div className="p-5 m-5  flex">
            <div className="flex-col">
                {/* { labelstate ? <div className="text-base font-medium p-2"> Title </div> : null} */}
                <textarea
                        onChange={(e:any) => setPublishedTitle({
                            ...publishedTitle,
                            title:e.target.value
                        })}
                        placeholder="Title"
                        className="h-16 w-screen max-w-screen-xl p-10 border-2 rounded-lg text-2xl font-bold"
                    />


                {/* { contentstate ? <div className="text-base font-medium p-2"> Content </div> : null} */}
                <textarea onChange={(e:any) => setPublishedTitle({
                            ...publishedTitle,
                            content :e.target.value
                        })} placeholder='Write Your Story' className='h-full mt-2 w-screen max-w-screen-xl text-lg p-10 border-2 rounded-lg' ></textarea>
                <button onClick={sendRequest}>
                    <p className=" mt-3 bg-green-700 text-white  cursor-pointer p-1 w-20 text-center mr-4  rounded-2xl"> Publish </p>
                </button>
                
            </div>
        </div>
    </div>
}