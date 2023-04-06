import { Link } from "react-router-dom";

export default function Dashboard() {
  const vans = [
    {
      img: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      name: "Modest Explorer",
      price: 60,
      id: 1,
    },
    {
      img: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      name: "Beach Bum",
      price: 80,
      id: 2,
    },
    {
      img: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      name: "Green Wonder",
      price: 70,
      id: 3,
    },
  ];
  return (
    <div className="bg-[#FFF7ED] pb-14">
      <div className="bg-[#FFEAD0] py-9 px-[26px]">
        <h3 className="text-dark font-bold text-4xl leading-[22px] mb-8">
          Welcome!
        </h3>
        <div className="flex justify-between mb-7">
          <h4 className="text-[#4D4D4D] font-medium">
            Income last <span className="font-bold underline">30 days</span>
          </h4>
          <span className="font-medium text-dark">Details</span>
        </div>
        <h2 className="font-extrabold text-5xl text-dark">$2,260</h2>
      </div>
      <div className="px-[26px] bg-[#FFDDB2] pt-[45px] pb-[45px]">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold mr-3">Review score</h3>
          <p className="text-[#4d4d4d] font-medium text-xl mr-auto">
            <span className=" font-bold text-dark">5.0</span>/5
          </p>
          <p className="text-dark font-medium">Details</p>
        </div>
      </div>
      <div className="px-[26px]">
        <div className="flex justify-between mt-10 mb-[30px]">
          <h3 className="font-bold text-2xl text-dark">Your listed vans</h3>
          <Link to="vans" className="font-medium text-dark">
            View all
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          {vans.map((van) => {
            return (
              <div key={van.id} className="flex w-full rounded-md px-6 py-[18px] gap-4 bg-white">
                <img src={van.img} className="h-[64px] w-[64px] rounded-[5px]" alt="" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <h4 className="text-xl text-dark font-semibold">{van.name}</h4>
                    <p className="text-[#4d4d4d]">${van.price}/day</p>
                  </div>
                  <button className="font-medium text-dark">Edit</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
