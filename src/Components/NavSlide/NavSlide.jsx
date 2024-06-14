import React from 'react';
import { Link } from 'react-router-dom';

const NavSlide = ({ left, onClose }) => {
  return (
    <div 
      className="absolute top-0 h-[100vh] bg-black w-full md:w-[430px] transition-left duration-300 ease-in-out" 
      style={{left: left}} 
    >
      <div className='flex items-start p-6 flex-col'>
        <div className='flex items-center justify-between w-[100%]'>
          <h4 className='text-gray-500'>ILinks</h4>
          <h2 onClick={onClose} className='text-3xl font-bold cursor-pointer'>X</h2>
        </div>
        <div className="links flex flex-col gap-4 mt-4">
          <Link to={"/"} onClick={onClose}>Home</Link>
          <Link to={"/about"} onClick={onClose}>About</Link>
          <Link to={"/link"} onClick={onClose}>Url Shortener</Link>
          <Link to={"/dashboard"} onClick={onClose}>Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default NavSlide;
