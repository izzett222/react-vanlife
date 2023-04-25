import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";
import arrow from "../../assets/arrow.svg";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};

export async function loader({ params }) {
  return await getVan(params.id);
}
export default function Van() {
  const routerData = useLoaderData();
  const { state } = useLocation();
  const searchParams = new URLSearchParams(state?.query);
  return (
    <div className="w-full px-[26px] pt-5 pb-20">
      <Link
        to={`..?${state?.query || ""}`}
        relative="path"
        className="flex items-center gap-3"
      >
        <img src={arrow} alt="arrow" />
        <span className="underline">
          Back to all {searchParams.get("type") || ""} vans
        </span>
      </Link>
      <div>
        <div className="w-full aspect-square rounded-[10px] mt-10">
          <img
            src={routerData.imageUrl}
            className="w-full h-full rounded-[5px]"
            alt="van"
          />
          <button
            className={`${
              typeColor[routerData.type.toLowerCase()]
            } tex-white text-[#FFEAD0] font-semibold rounded-[5px] mt-2.5 px-3 py-2`}
          >
            {routerData.type}
          </button>
          <h4 className="text-3xl mt-5 font-semibold leading-[31px] group-hover:underline duration-200">
            {routerData.name}
          </h4>
          <div className="mt-2.5">
            <span className="text-2xl font-semibold leading-[31px]">
              ${routerData.price}
            </span>
            <span className="text-sm text-[#161616]">/day</span>
          </div>
          <p className="font-medium text-[#161616] mt-4 leading-[23.6px]">
            {routerData.description}
          </p>
          <button className="w-full block text-center text-white py-3 rounded-[10px] mt-5 bg-[#FF8C38]">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
}
