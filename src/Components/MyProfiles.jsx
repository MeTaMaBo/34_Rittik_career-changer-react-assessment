import React from 'react'
import Navbar from './Navbar'

const MyProfiles = () => {
  return (

    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-5">
        <h1 className="pt-5 text-xl font-black">Rittik Chawla - Group F - 34</h1>
        <img src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/336481865_3051953378442501_854823984145181075_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=qKGFUbQrRa8AX_IG4Cr&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfDPtxFdBTaeA_sqJzEdYS8GJfOoc21TfFjjgCnfFzFVOQ&oe=650785A8" alt="picture-profile" className="rounded-lg border-2 border-black" width="300" height="300"></img>
        <h3 className="text-base text-lg font-bold">My Biography</h3>
        <p className="mx-auto w-1/2 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>  
  )
}

export default MyProfiles

