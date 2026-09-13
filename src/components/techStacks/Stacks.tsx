import type { Dispatch, SetStateAction } from "react";
import type { ITechs } from "../../types/techs";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";


interface StacksProps {
    stack: ITechs[];
    setStack: Dispatch<SetStateAction<ITechs[]>>;
}

const Stacks = ({ stack, setStack }: StacksProps) => {
    if (stack.length === 0) {
        return <p>Your stack is empty.</p>;
    }

    const handleItemDelete = (id: number) => {
        const exist = stack.find(item => item.id === id); 
        toast.error(`${exist?.title} has been Remove.`)
        setStack((prev) => prev.filter((item) => item.id !== id)); 
        
    }

    const handleAllRemove = () => {
        setStack([]); 
        toast.error('All Stack has been Remove.')
    }

    return (
        <div className="flex flex-wrap gap-3 justify-center items-center">
            {stack.map((item) => (
                <div key={item.id} className="flex justify-between w-full p-4 border rounded-xl bg-gray-50">
                    <div className="flex gap-2">
                        <div className="">
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-8 h-8 object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                            <span className="text-xs text-gray-500">{item.category}</span>
                        </div>
                    </div>
                    <div 
                    onClick={() => handleItemDelete(item.id)}
                    className="text-2xl font-bold text-red-500 cursor-pointer">
                        <MdDeleteOutline />
                    </div>
                </div>

            ))}
            <div className="border w-full rounded-full p-2 mt-10 cursor-pointer">
                <button 
                onClick={() => handleAllRemove()}
                className="text-xl font-bold text-red-500 cursor-pointer">
                    Remove All</button>
            </div>
        </div>
    );
};

export default Stacks;