import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white w-full bg-[url('./assets/bg-vans.png')] px-[26px]">
      <div className="pt-16 max-w-lg mx-auto">
        <h1 className="text-4xl text-white leading-[42px] font-semibold mb-6">You got the travel plans, we got the travel vans.</h1>
        <p className="font-medium mb-12">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to={"/vans"} className="bg-[#FF8C38] w-full py-3 rounded-[5px] text-white font-bold block text-center">Find your van</Link>
      </div>
    </div>
  );
}
