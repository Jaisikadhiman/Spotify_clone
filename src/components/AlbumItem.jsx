import React from 'react'
import { albumsData } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom';
const AlbumItem = ({name,image,desc,id}) => {
  const navigate= useNavigate();
  return (
    <div className='flex ml-6 mt-5 w-full gap-3 lg:gap-10'>
      <div className='h-[180px] w-28 bg-neutral-700] hover:bg-neutral-600 hover:scale-90 transition-transform duration-300  '>
        <div onClick={()=>navigate(`/album/${id}`)} className=' hover:p-2 hover:rounded-lg  '>
            <img  className="w-auto h-auto" src={image} alt="" />
        </div>
        <div className='flex flex-col items-center justify-center mt-2'>
            <p className='text-xs font-[900] text-yellow-50'>{name}</p>
            <p  className='text-[10px] font-semibold text-yellow-50 p-1'>{desc}</p>
        </div>
      </div>
      
    </div>
  )
}

export default AlbumItem
