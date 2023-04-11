import { Link, Outlet } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import profile from "../assets/profile.webp"

export default function AppLayout() {
  const links = [
    {
      to: "/host",
      text: "Host",
      id: 1,
    },
    {
      to: "/about",
      text: "About",
      id: 2,
    },
    {
      to: "/vans",
      text: "Vans",
      id: 3,
    },
    {
      to: "login",
      text: <img src={profile} className="w-[18px] h-[18px]" alt="" />,
      id: 4,
    },
  ];
  return (
    <div className="flex flex-col min-h-[100vh] font-sans">
      <header className="bg-[#FFF7ED] h-24 items-center w-full flex justify-between px-6">
        <Link
          to="."
          className="font-sans font-black text-[25.35px] leading-[40.3px]"
        >
          #VANLIFE
        </Link>
        <div className="flex gap-5 items-center">
          {links.map((link) => {
            return <HeaderLink key={link.id} {...link} />
          })}
          <button onClick={() => localStorage.removeItem("loggedIn")} className="bg-slate-200 px-1.5">X</button>
        </div>
      </header>
      <div className="flex-1 flex">
        <Outlet />
      </div>
      <footer className="bg-[#252525] w-full h-16 flex items-center justify-center">
            <p className="font-medium text-sm text-[#AAAAAA]">Ⓒ 2022 #VANLIFE</p>
      </footer>
    </div>
  );
}
