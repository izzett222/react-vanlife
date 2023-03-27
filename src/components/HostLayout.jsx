import { Outlet } from "react-router-dom";
import HeaderLink from "./HeaderLink";

export default function HostLayout() {
  const links = [
    {
      to: "/host",
      text: "dashboard",
      id: 1,
    },
    {
      to: "income",
      text: "Income",
      id: 2,
    },
    {
      to: "reviews",
      text: "Reviews",
      id: 3,
    },
  ];
  return (
    <div className="flex flex-col h-full font-sans w-full">
      <div className="bg-[#FFF7ED] h-20 items-center w-full flex justify-between px-6">
        <div className="flex gap-5">
          {links.map((element) => {
            return <HeaderLink end key={element.id} {...element} />
          })}
        </div>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
