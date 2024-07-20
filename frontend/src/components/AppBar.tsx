import { Avatar } from "./Avatar"
import { Link } from 'react-router-dom'

export const AppBar = ({type}:{type:'publish'|'notpublish'}) =>{
    return <div className="h-15 border-b-2 p-2 ">
        <div className="font-medium  p-2 w-full  flex justify-between">
            <div className="flex justify-center ">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full border-2 bg-slate-700">
                    <span className="font-xs  dark:text-white">M</span>
                </div>
                <div className="pl-3 text-2xl">
                    Medium
                </div>
            </div>
            <div className="flex justify-center"> 
                <div >
                    {type==='publish'? 
                    <div className="flex flex-col bg-green-700 text-white p-1 w-20 text-center mr-4  rounded-2xl">
                        <Link to={"/createblog "}>Publish</Link>                    
                    </div> :null}
                </div>
                <div>
                <Avatar name="Priyanshu "/>
                </div>

            </div>
            
        </div> 
        
    </div>
}