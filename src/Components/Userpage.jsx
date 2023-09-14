import React from 'react'
import Navbar from './Navbar'
import ButtonSector from './ButtonSector'
import UserTable from './UserTable'


const Userpage = () => {
  return (
    <>
      <Navbar />
      <div className='w-6/12 mx-auto '>
        <main className='p-5'>
          <h1 className='text-6xl p-5'>Generation Thailand</h1>
          <p className='text-5xl p-5'>Home User-Sector</p>
          <ButtonSector />
        </main>
        <UserTable />
      </div>

    </>)
}

export default Userpage