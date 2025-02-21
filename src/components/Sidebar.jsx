import React from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <>
     <div className="flex flex-col">
     <div className="lg:flex w-60  p-4 rounded m-1 bg-[#121212] h-[15%] lg:flex-col ">
        <div className="flex gap-2 items-center mx-1">
          <img className="h-5 w-5 " src={assets.home_icon} alt="" />
          <p className="text-yellow-50 font-semibold text-xs ">Home</p>
        </div>
        <div className="flex gap-2 items-center mt-3 mx-1">
          <img className="h-5 w-5 " src={assets.search_icon} alt="" />
          <p className="text-yellow-50 font-semibold text-xs ">Search</p>
        </div>
      </div>
      <div className="lg:flex w-60  px-2 py-4 rounded m-1 bg-[#121212] h-[85%] flex-col">
        <div className="flex items-center justify-between ">
          <div className="flex gap-2 ">
            <img className="h-4 w-4" src={assets.stack_icon} alt="" />
            <p className="text-yellow-50 text-xs">Your Library</p>
          </div>
          <div className="flex gap-2 ">
            <img className="h-4 w-4" src={assets.arrow_icon} alt="" />
            <img className="h-4 w-4" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="h-[25%] bg-neutral-800 rounded w-full mt-4 p-2 ">
            <p className="text-yellow-50 font-semibold text-xs ">Create your first playlist</p>
            <p className="text-neutral-500 font-semibold text-[10px] mt-1">It's easy we will help you</p>
            <button className="bg-yellow-50 rounded-[15px] h-7 mt-3 w-28 p-0 text-sm font-semibold">Create Playlist</button>
        </div>
        <div className="h-[25%] bg-neutral-800 rounded w-full mt-4 p-2 ">
            <p className="text-yellow-50 font-semibold text-xs ">Let's findsome podcast to follow</p>
            <p className="text-neutral-500 font-semibold text-[10px] mt-1">We'll keep you update on new episodes</p>
            <button className="bg-yellow-50 rounded-[15px] h-7 mt-3 w-28 p-0 text-sm font-semibold">Browse podcast</button>
        </div>
      </div>
     </div>
    </>
  )
};

export default Sidebar;
