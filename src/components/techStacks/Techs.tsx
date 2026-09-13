import { use } from "react";
import type { ITechs } from "../../types/techs";

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
            {techs.map(tech => <ul>
                <li>{tech.title}</li>
            </ul> )}
        </div>
    )
}

export default Techs