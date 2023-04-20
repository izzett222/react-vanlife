import { Link } from "react-router-dom";

export default function NotFound() {
    return <div className="w-full pb-20 flex items-center px-[26px] bg-[#FFF7ED]">
        <div>
            <h1 className="text-[32px] leading-[42px] font-bold text-dark mb-[30px]">Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="bg-dark w-full text-center py-3 rounded-[5px] text-white block">Return to home</Link>
        </div>
    </div>
}