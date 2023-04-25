import { Link } from "react-router-dom";

export default function Signup() {
    return <div className="flex flex-col w-full pt-5 items-center">
        <h1 className="text-3xl mb-5">Signup</h1>
        <Link to="/login" className="underline text-orange-700">login</Link>
    </div>
}