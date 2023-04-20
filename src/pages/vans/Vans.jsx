import { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};

export default function Vans() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("start");
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const loading = state === "loading" || state === "start";
  const failed = state === "failed";
  const type = searchParams.get("type");
  const filters = [
    { id: 1, name: "simple" },
    { id: 2, name: "rugged" },
    { id: 3, name: "luxury" },
  ];
  useEffect(() => {
    setState("loading");
    getVans()
      .then((data) => {
        setData(data);
        setState("success");
      })
      .catch((err) => {
        setError(err);
        setState("failed");
      });
  }, []);
  const filteredData = data.filter((van) => !type || van.type === type);

  if (loading) {
    return <h1>loading...</h1>;
  } else if (failed) {
    return (
      <h1 className="text-3xl font-bold px-[26px] mt-10">
        server failed with error: {error.message}. Please try again later
      </h1>
    );
  } else {
    return (
      <div className="w-full">
        <div className=" px-[26px] mx-auto py-20">
          <h1 className="font-bold text-[32px] leading-[33.7px] text-dark">
            Explore our van options
          </h1>
          <div className="mt-5 mb-10 flex justify-between items-center">
            <div className="flex gap-5 items-center">
              {filters.map((filter) => (
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
              ))}
            </div>
            {type && <Link to="." className="underline text-[#4D4D4D] font-medium">
              clear filters
            </Link>}
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {filteredData.map((van) => (
              <VanCard {...van} query={searchParams.toString()} key={van.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
