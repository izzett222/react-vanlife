import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import arrow from "../../assets/arrow.svg";

const typeColor = {
  simple: "bg-[#E17654]",
  rugged: "bg-[#115E59]",
  luxury: "bg-[#161616]",
};

export default function HostVan() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.vans[0]);
      });
  }, [id]);
  return (
    data && (
      <div className="w-full px-[26px] pt-5 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3"
        >
          <img src={arrow} alt="" />
          <span className="underline">Back to all vans</span>
        </button>
        <div>
          <div className="w-full rounded-[10px] mt-10">
            <div className="flex items-center gap-5">
              <img src={data.imageUrl} className="w-40 rounded-[5px]" alt="" />
              <div>
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
              </div>
            </div>
        <div className="mt-6 mb-6 flex gap-6">
            <NavLink className={({ isActive }) => `${isActive && "underline font-medium"}`} end to=".">Details</NavLink>
            <NavLink className={({ isActive }) => `${isActive && "underline font-medium"}`} end to="pricing">Pricing</NavLink>
            <NavLink className={({ isActive }) => `${isActive && "underline font-medium"}`} end to="photos">Photos</NavLink>
        </div>
        <div>
            <Outlet context={{van: data}}/>
        </div>
          </div>
        </div>
      </div>
    )
  );
}
