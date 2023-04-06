import { useEffect, useState } from "react";
import VanCard from "../../components/VanCard";

export default function Vans() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setData(data.vans));
  }, []);
  return (
    <div className="w-full">
      <div className=" px-[26px] mx-auto py-20">
      <h1 className="font-bold text-[32px] leading-[33.7px] text-dark mb-10">Explore our van options</h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {data.map((el) => {
            return <VanCard {...el} key={el.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
