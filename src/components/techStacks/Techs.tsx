import { use, type Dispatch, type SetStateAction } from "react";
import type { ITechs } from "../../types/techs";
import TechCard from "./TechCard";
import Stacks from "./Stacks";

interface TechsProps {
    techsPromise: Promise<ITechs[]>,
    stack: ITechs[],
    setStack: Dispatch<SetStateAction<ITechs[]>>
}

const Techs = ({ techsPromise, stack, setStack }: TechsProps) => {
    const techs = use(techsPromise);

    return (
        <div className="container mx-auto grid grid-cols-12 gap-8 items-start my-10">

            <div className="col-span-12 lg:col-span-8">
                <h2 className="text-4xl font-bold">
                    Explore the <span className="text-[#CE4EB6]">Technologies</span>
                </h2>
                <p className="text-gray-500 text-lg mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                    {techs.map((tech) => (
                        <TechCard
                            key={tech.id}
                            techCard={tech}
                            stack={stack}
                            setStack={setStack}
                        />
                    ))}
                </div>
            </div>


            <div className="col-span-12 lg:col-span-4 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm sticky top-6">
                <div className="">
                    <h3 className="text-xl font-bold mb-1">Your Stack</h3>
                    <p className="text-sm text-gray-400 mb-6"> {stack.length} technologies selected yet.</p>
                </div>
                <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
                    <Stacks
                        stack={stack}
                        setStack={setStack}
                    />

                </div>
            </div>
        </div>
    );
};

export default Techs;