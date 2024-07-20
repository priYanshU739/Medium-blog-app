
export const Skeletons =()=>{
    return <div >
        <div role="status" className="w-full animate-pulse">

            <div  className='w-full cursor-pointer' >
            <div className="flex text-center pt-4 w-screen max-w-5xl ">
                <div className="flex justify-center flex-col">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                </div>
                
                <div className="font-medium flex justify-center flex-col text-base pl-2">
                    <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div> 
                </div>
                
                <div className="text-slate-600 flex justify-center flex-col pl-2 font-normalf">
                    <div className="h-2.5 bg-gray-200 rounded-lg  w-48 mb-4"></div>
                </div>
            </div>
            
            <div className="text-2xl font-bold pt-2 ">
                <div className="h-2.5 bg-gray-200 rounded-lg  w-48 mb-4"></div>
            </div>
            <div className="font-serif text-slate-600 pt-2">
                <div className="h-2.5 bg-gray-200 rounded-lg  w-48 mb-4"></div>
            </div>
            <div className=" text-base text-slate-500 font-normal pt-8"> 
                <div className="h-2.5 bg-gray-200 rounded-lg  w-48 mb-4"></div>
            </div>
            <div className='border-t-2 mt-6 mb-4 '> </div>
        </div>
        </div>
        </div>
}