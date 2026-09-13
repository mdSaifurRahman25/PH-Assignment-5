import { use } from "react";
import type { ITechs } from "../../types/techs";
import TechCard from "./TechCard";

interface TechsProps {
    techsPromise: Promise<ITechs[]>,

}
const Techs = ({techsPromise}: TechsProps  ) => {
    // console.log(techsPromise);
    const techs = use(techsPromise); 
   
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold">Explore the <span className="text-[#CE4EB6] ">Technologies</span> </h2>
            <p className="text-2xl">Pick one technology per category to build your ideal stack.</p>
           {/* Technologies List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                {techs.map(tech => {
                return (
                    <TechCard key={tech.id} techCard={tech} />
                )
            })}
            </div>
        </div>
    )
}

export default Techs