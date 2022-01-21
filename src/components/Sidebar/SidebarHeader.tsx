import { ImLab } from 'react-icons/im';

export function SidebarHeader() {
    return (
        <div className={`
            flex
            flex-col
            items-center
            h-20
            text-violet-700
            py-2
            z-10
            mb-2

            after:content-[''] 
            after:mt-2 
            after:bg-gray-200 
            after:w-full 
            after:h-px 
            after:rounded-3xl
        `}>
            <ImLab size={32} />
            <span className="text-violet-700 font-mono mt-1">CRUD</span>
        </div>
    )
}