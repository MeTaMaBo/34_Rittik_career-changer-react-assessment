import React from 'react'
import { Link } from 'react-router-dom';


const ButtonSector = () => {
  return (
      <div className='flex justify-around mt-8 '>
            
      <button><Link to={"/Userpage"} className='p-5 ease-out duration-300 ... bg-sky-900 shadow-lg shadow-blue-900/50 hover:bg-sky-500 hover:shadow-sky-500/60  text-white'>User Home Sector</Link></button>
      <button><Link to={"/Adminpage"} className='p-5 ease-out duration-300 ... bg-sky-900 shadow-lg shadow-blue-900/50  hover:bg-sky-500 hover:shadow-sky-500/60 text-white'>Admin Home Sector</Link></button>

      </div>
  )
}

export default ButtonSector