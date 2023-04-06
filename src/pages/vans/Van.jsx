import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};

export default function Van() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const {state} = useLocation()
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.vans);
      });
  }, [id]);
  const searchParams = new URLSearchParams(state?.query);
  return (
    data && (
      <div className="w-full px-[26px] pt-5 pb-20">
        <Link
          to={`..?${state?.query || ''}`}
          relative="path"
          className="flex items-center gap-3"
        >
          <img src={arrow} alt="" />
          <span className="underline">Back to all {searchParams.get("type") || ""} vans</span>
        </Link>
        <div>
          <div className="w-full aspect-square rounded-[10px] mt-10">
            <img
              src={data.imageUrl}
              className="w-full h-full rounded-[5px]"
              alt=""
            />
            <button
              className={`${
                typeColor[data.type.toLowerCase()]
              } tex-white text-[#FFEAD0] font-semibold rounded-[5px] mt-2.5 px-3 py-2`}
            >
              {data.type}
            </button>
            <h4 className="text-3xl mt-5 font-semibold leading-[31px] group-hover:underline duration-200">
              {data.name}
            </h4>
            <div className="mt-2.5">
              <span className="text-2xl font-semibold leading-[31px]">
                ${data.price}
              </span>
              <span className="text-sm text-[#161616]">/day</span>
            </div>
            <p className="font-medium text-[#161616] mt-4 leading-[23.6px]">
              {data.description}
            </p>
            <button className="w-full block text-center text-white py-3 rounded-[10px] mt-5 bg-[#FF8C38]">
              Rent this van
            </button>
          </div>
        </div>
      </div>
    )
  );
}
