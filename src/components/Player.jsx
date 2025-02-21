import React, { useContext, useEffect } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const{seekBar,seekBg,play,pause,playStatus,track,time,setTime, audioRef,previous,next,seekSong}=useContext(PlayerContext);
  useEffect(()=>{
setTimeout(()=>{
audioRef.current.ontimeupdate=()=>{
  seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
  setTime({
    currentTime: {
      second: Math.floor(audioRef.current.currentTime % 60),
      minute: Math.floor(audioRef.current.currentTime / 60),
    },
    totalTime: {
      second: Math.floor(audioRef.current.duration % 60),
      minute: Math.floor(audioRef.current.duration / 60),
    },
  })
}
},1000)
  },[audioRef])
  return (
    <div className="h-[10%] w-full bg-black lg:flex justify-between items-center">
      <div className="flex">
        <img className="h-9 w-9 mx-1" src={track.image} alt="" />
        <div className="flex flex-col justify-between">
          <p className="text-yellow-50 text-xs font-semibold">
            {track.name}
          </p>
          <p className="text-yellow-50 text-xs font-semibold">
            {track.desc.slice(0, 12)}
          </p>
        </div>
      </div>
      <div className="flex gap-1 flex-col ">
        <div className="flex gap-2 justify-center items-center ">
          <img className="h-3 w-3" src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className="h-3 w-3 cursor-pointer" src={assets.prev_icon} alt="" />
          {
            playStatus ? <img onClick={pause} className="h-3 w-3 cursor-pointer" src={assets.pause_icon} alt="" />: <img onClick={play} className="h-3 w-3 cursor-pointer" src={assets.play_icon} alt="" />
          }
          <img onClick={next} className="h-3 w-3 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="h-3 w-3" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex mt-1 items-center gap-4">
          <p className="text-xs text-yellow-50 ">{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg}  onClick={seekSong} className="bg-gray-300 rounded-full cursor-pointer max-w-[350px] w-[60vw] h-0.5">
            <hr ref={seekBar} className="bg-green-700 w-0 h-[2px] rounded-full border-none " />
          </div>
          <p className="text-xs text-yellow-50">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex gap-1.5 mr-2 items-center opacity-80">
        <img className="h-3 w-3" src={assets.play_icon} alt="" />
        <img className="h-3 w-3" src={assets.mic_icon} alt="" />
        <img className="h-3 w-3" src={assets.queue_icon} alt="" />
        <img className="h-3 w-3" src={assets.speaker_icon} alt="" />
        <img className="h-3 w-3" src={assets.volume_icon} alt="" />
        <div className="flex items-center gap-5">
          <div className="bg-gray-300 rounded-full cursor-pointer max-w-[50px] w-[60vw] h-0.5">
            <hr className="bg-green-700  " />
          </div>
        </div>
        <img className="h-3 w-3" src={assets.mini_player_icon} alt="" />

        <img className="h-3 w-3" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
