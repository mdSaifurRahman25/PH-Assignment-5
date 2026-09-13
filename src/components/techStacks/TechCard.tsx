import { CiStar } from "react-icons/ci";
import type { ITechs } from "../../types/techs";

interface ITechCardsProps {
  techCard: ITechs;
}

const TechCard = ({ techCard }: ITechCardsProps) => {
  return (
    
    <div className="card bg-base-100 w-full shadow-sm pt-6 border border-gray-100 rounded-2xl">
      <figure className="flex justify-between px-6">
        <img
          className="w-[35px] h-[30px] object-contain"
          src={techCard.icon}
          alt={techCard.title}
        />
        <p className="border rounded-full px-3 py-1 text-xs bg-gray-100">
          {techCard?.badge}
        </p>
      </figure>

      <div className="card-body p-6">
        <h2 className="card-title font-bold text-xl">{techCard.title}</h2>
        <div className="border-b border-gray-100 pb-4">
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">
            {techCard.description}
          </p>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
          <div className="bg-gray-100 px-2.5 py-1 rounded-full">
            {techCard.category}
          </div>
          <div>{techCard.level}</div>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <CiStar className="text-yellow-500 text-base" />
            {techCard.rating}
          </div>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-neutral btn-block rounded-xl">
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;