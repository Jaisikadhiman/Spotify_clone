import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
     <div className="flex flex-col w-full h-[15%] justify-between">
     <div className="flex  justify-between  mt-3 ">
        <div className="flex gap-2">
          <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
            <img onClick={()=>navigate(-1)} className="h-3 w-3 cursor-pointer" src={assets.arrow_left} alt="" />
          </div>
          <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
            <img onClick={()=>navigate(+1)} className="h-3 w-3 cursor-pointer" src={assets.arrow_right} alt="" />
          </div>
        </div>
       <div className="flex gap-2">
       <div className="h-7 w-[120px] bg-yellow-50 text-center rounded-full items-center">
            <button className="font-semibold text-black text-xs">Explore Premium</button>
        </div>
        <div className="h-7 w-[80px] bg-black text-center rounded-full items-center">
            <button className="font-semibold text-yellow-50 text-xs">Install App</button>
        </div>
        <div className="flex  text-center">
            <p className="h-7 w-7 rounded-full bg-purple-500 text-black font-semibold text-xl">G</p>
        </div>
       </div>
      </div>
        <div className="flex gap-5  items-center">
<div className="flex h-6 w-10 cursor-pointer text-black justify-center rounded-full text-sm text-center bg-white"><p>All</p></div>
<div className="flex h-7 w-16 cursor-pointer text-yellow-50 justify-center rounded-full text-sm items-center  bg-black"><p>Music</p></div>
<div className="flex h-7 w-16 cursor-pointer text-yellow-50 justify-center rounded-full text-sm items-center bg-black"><p>Podcast</p></div>

        </div>
     </div>
    </>
  );
};

export default Navbar;
