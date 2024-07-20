export const Avatar = ({name}:{name:string})=>{
    return <div>
        <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-xs text-gray-600 dark:text-gray-300">{name.slice(0,2).toUpperCase()}</span>
        </div>
    </div>
}