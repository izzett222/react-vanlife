import { Link } from "react-router-dom";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};
export default function VanCard({ imageUrl, name, price, type, id }) {
  return (
    <Link to={`${id}`} className="block group">
    <div className="aspect-square w-full">
       <img src={imageUrl} className="rounded-[5px] w-full h-full" alt="" /> 
    </div>
      
      <div className="flex justify-between mt-2.5">
        <h4 className="text-xl font-semibold leading-[31px] group-hover:underline duration-200">{name}</h4>
        <div className="relative">
          <span className="text-2xl font-semibold leading-[31px]">${price}</span>
          <span className="absolute -bottom-5 text-sm text-[#161616] right-0">/day</span>
        </div>
      </div>
      <button className={`${typeColor[type.toLowerCase()]} tex-white text-[#FFEAD0] font-semibold rounded-[5px] mt-2.5 px-3 py-2`}>
        {type}
      </button>
    </Link>
  );
}
