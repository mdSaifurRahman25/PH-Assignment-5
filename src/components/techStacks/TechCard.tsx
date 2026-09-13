import { CiStar } from "react-icons/ci";
import type { ITechs } from "../../types/techs";

interface ITechCardsProps {
  techCard: ITechs,

}


const TechCard = ({ techCard }: ITechCardsProps) => {
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm pt-10">
        <figure className="flex justify-around">
          <img
          className="w-[35px] h-[30px]"
            src={techCard.icon}
            alt={techCard.title} />
          <p className="border rounded-full px-2 py-0 bg-gray-300">{techCard?.badge}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{techCard.title}</h2>
          <div className="border-b border-gray-100">
            <p className="mb-5">{techCard.description}</p>
          </div>
          
          <div className="flex justify-around mt-2 ">
            <div className="bg-gray-100 px-2 py-0 rounded-full">{techCard.category}</div>
            <div>{techCard.level}</div>
            <div className="flex items-center gap-1">
              <CiStar />
              {techCard.rating}
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-neutral btn-block mt-2 rounded-2xl py-4 h-auto">
              Add to Stack
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechCard