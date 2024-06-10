import React from 'react'
import { Link } from 'react-router-dom'

const NavSlide = ({left , setLeft}) => {
  return (
    <div className={`absolute top-0  h-[100vh] bg-black w-[430px] left-[${left}]`} >
      <div className='flex items-start p-6  flex-col'>
        <div className='flex items-center justify-between w-[100%]'>
          <h4 className='text-gray-500'>Links</h4>
          <h2 onClick={()=>{setLeft("-110%")}} className='text-3xl font-bold'>X</h2>
        </div>
        <div className="links flex flex-col gap-4 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link>LinkShortner</Link>
          <Link>Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default NavSlide