import { NavLink } from "react-router-dom"

export default function HeaderLink({ to, text, end }) {

    return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive}) => `text-[#4D4D4D] font-semibold leading-[22.9px] ${isActive && 'underline'}`}
    >
      {text}
    </NavLink>
  )
}