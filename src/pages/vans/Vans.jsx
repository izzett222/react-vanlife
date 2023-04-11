import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";
import VanCard from "../../components/VanCard";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};
export async function loader() {
  return await getVans();
}

export default function Vans() {
  const routerData = useLoaderData();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const filters = [
    { id: 1, name: "simple" },
    { id: 2, name: "rugged" },
    { id: 3, name: "luxury" },
  ];
  const filteredData = routerData.filter((van) => !type || van.type === type);
  return (
    <div className="w-full">
      <div className=" px-[26px] mx-auto py-20">
        <h1 className="font-bold text-[32px] leading-[33.7px] text-dark">
          Explore our van options
        </h1>
        <div className="mt-5 mb-10 flex justify-between items-center">
          <div className="flex gap-5 items-center">
            {filters.map((filter) => {
              return (
                <Link
                  to={`?type=${filter.name}`}
                  key={filter.id}
                  className={`rounded-[5px] ${
                    type === filter.name
                      ? `${typeColor[type]} text-white`
                      : "bg-[#FFEAD0]"
                  } px-5 py-1.5`}
                >
                  {filter.name}
                </Link>
              );
            })}
          </div>
          <Link to="." className="underline text-[#4D4D4D] font-medium">
            clear filters
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {filteredData.map((van) => {
            return (
              <VanCard {...van} query={searchParams.toString()} key={van.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
