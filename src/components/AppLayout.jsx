import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  const links = [
    {
      to: "/about",
      text: "About",
      id: 1,
    },
    {
      to: "/vans",
      text: "Vans",
      id: 2,
    },
  ];
  return (
    <div className="flex flex-col min-h-[100vh] font-sans">
      <header className="bg-[#FFF7ED] h-24 items-center w-full flex justify-between px-6">
        <Link
          to="/"
          className="font-sans font-black text-[25.35px] leading-[40.3px]"
        >
          #VANLIFE
        </Link>
        <div className="flex gap-5">
          {links.map((el) => (
            <Link
              to={el.to}
              key={el.id}
              className="text-[#4D4D4D] font-semibold leading-[22.9px]"
            >
              {el.text}
            </Link>
          ))}
        </div>
      </header>
      <div className="flex-1 flex ">
        <Outlet />
      </div>
      <footer className="bg-[#252525] w-full h-16 flex items-center justify-center">
            <p className="font-medium text-sm text-[#AAAAAA]">Ⓒ 2022 #VANLIFE</p>
      </footer>
    </div>
  );
}
