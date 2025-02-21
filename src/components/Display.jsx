import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
const Display = () => {
  return (
    <div className="w-[100%] lg:w-[80%] bg-[#121212] overflow-auto rounded text-white  p-3">
      <Routes>
        <Route path="/" element={<DisplayHome/>}/>
        <Route path="/album/:id" element={<DisplayAlbum/>}/>

      </Routes>
    </div>
  );
};

export default Display;
