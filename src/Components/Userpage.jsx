import React from 'react'
import Navbar from './Navbar'
import ButtonSector from './ButtonSector'


const Userpage = () => {
  return (
    <>
      <Navbar />
      <main className='w-6/12 mx-auto '>
        <h1 className='text-6xl p-5'>Generation Thailand</h1>
        <p className='text-5xl p-5'>Home User-Sector</p>
        <ButtonSector />
      </main>
    </>  )
}

export default Userpage