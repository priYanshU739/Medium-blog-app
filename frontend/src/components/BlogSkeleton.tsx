
export  const BlogSkeleton =()=>{

    return <div>
        <div role="status" className="w-full animate-pulse">
        <div className="flex justify-center mt-10 ">
            <div className="grid grid-cols-12 px-12 w-full max-w-screen-2xl  ">
                <div className="col-span-8">
                    <div className="text-4xl font-extrabold">
                        <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div> 
                    </div>
                    <div className="text-slate-600 text-sm mt-2">
                        <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div> 
                    </div>
                    <div className="text-base font-normal mt-3">
                        
                        <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div> 
                    </div>
                </div>
            
                <div className="col-span-4 text-left ml-7">
                    <div className="font-medium">
                        <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div>  
                    </div>
                    <div className="font-bold flex flex-cols mt-2 p-2">
                        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden rounded-full border-2 bg-slate-100">
                            <span className="font-xs text-gray-600 dark:text-gray-300"></span>
                        </div>
                        <div className="ml-2">
                            <div className="h-2.5 bg-gray-200 rounded-lg  mb-4"></div> 
                        </div>
                        
                    </div>
                    
                </div>
        </div>
        </div>
        </div>
    </div>
}