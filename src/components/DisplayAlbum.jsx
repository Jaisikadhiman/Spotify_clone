import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import { assets, albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const displayRef= useRef();
const location = useLocation();
const isAlbum= location.pathname.includes("album");
const albumId = isAlbum ? location.pathname.slice(-1): "";
const bgColor= albumsData[Number(albumId)].bgColor;
useEffect(()=>{
  if(isAlbum){
    displayRef.current.style.background= `linear-gradient(${bgColor},#121212)`
  }else{
    displayRef.current.style.background= "#121212"

  }
},[])
const {playWithId}= useContext(PlayerContext);
  return (
   
    <>
     <div ref={displayRef} >
      <Navbar />
    
     <div  className="flex mt-5 gap-5 ml-3 ">
        <div>
          <img className="h-40 w-40" src={albumsData[id].image} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold text-white">Playlist</p>
          <h1 className="text-6xl font-bold text-white">Happy Favorites</h1>
          <p className="text-xs font-semibold text-white py-4">
            {albumsData[id].desc}
          </p>
          <div className="flex gap-1 items-center mb-8">
            <img className="h-6 w-6 " src={assets.spotify_logo} alt="" />
            <p className="text-xs font-bold ">
              Spotify. <span className="font-[450]">1,23,4324 like</span>
            </p>
            <p className="font-bold text-xs ">
              .50 songs, <span className="font-[450]">about 2 hr 30 min</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mb-4 text-[#a7a7a7] mt-4 pl-2 ">
        <p>
          <b className="mr-4">#</b> Title
        </p>
        <p className="text-sm">Album</p>
        <p className="text-sm">Date Added</p>
        <img className="w-5" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>{playWithId(item.id)}} key={index} className="  hover:bg-neutral-800 cursor-pointer gap-2 p-2 items-center grid grid-cols-3 sm:grid-cols-4 text-[#a7a7a7] ">
          <div className="flex gap-2">
            <p>{index + 1}</p>
            <img className="w-8" src={item.image} alt="" />
            <p className="text-sm">{item.name}</p>
          </div>
          <p className="text-sm ml-16 ">{albumsData[id].name}</p>
          <p className=" hidden sm:block">5 days ago</p>
          <p>{item.duration}</p>
        </div>
      ))}
     </div>
    </>
  );
};

export default DisplayAlbum;
