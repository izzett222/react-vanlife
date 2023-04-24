import { Link } from "react-router-dom";
import pic from "../assets/van-about.png";

export default function About() {
  return (
    <div className="w-full">
      <img src={pic} alt="about" className="w-full" />
      <div className="py-12 max-w-lg mx-auto text-[#161616] px-[26px]">
        <h2 className="font-bold text-[#161616] text-[32px] leading-[38px] mb-8">Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p className="font-medium leading-[22px]">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="font-medium leading-[22px] mt-7">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] px-9 py-8 mt-12 rounded-[5px]">
          <h3 className="text-2xl font-bold">Your destination is waiting. Your van is ready.</h3>
          <Link to="/vans" className="block bg-[#161616] text-white px-[22px] py-3 w-fit rounded-[10px] mt-6">Explore our vans</Link>
        </div>
      </div>
    </div>
  );
}
