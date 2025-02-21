import React from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import { albumsData ,songsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import SongsItem from "./SongsItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <p className="text-yellow-50 font-semibold mt-3 ml-6 text-[16px]">
          Featured Data
        </p>
      </div>
      <div className="flex overflow-auto cursor-pointer  ">
        {albumsData.map((item, index) => (
          <AlbumItem
            key={index}
            name={item.name}
            image={item.image}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </div>
      <div className="">
        <p className="text-yellow-50 font-semibold mt-3 ml-6 text-[16px]">
          Todays's Biggest Hits
        </p>
      </div>
      <div className="flex overflow-auto cursor-pointer ">
        {songsData.map((item, index) => (
          <SongsItem
            key={index}
            name={item.name}
            image={item.image}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </div>
      <AlbumItem />
    </>
  );
};

export default DisplayHome;
