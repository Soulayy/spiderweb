import React from 'react'
import "./Home.css"
import Navbar from './Navbar/Navbar'

export default function Home() {

  return (
    <div className='myhome h-screen w-screen pt-6'>
        <Navbar></Navbar>
        <div className='homecontainer h-[85%] flex justify-center items-center'>
            <div className='h-[90%] w-[45%]  flex justify-center items-center flex-col'>
                <h1 className='w-[60%] text-1xl text-white'>SO, YOU WANT TO TRAVEL TO</h1>
                <h1 className='text-[150px] text-white w-[60%]'> SPACE</h1>
                <p className='text-white w-[60%]'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className='h-[90%] w-[45%] flex justify-center items-center'>
                <div className='animate-[spin_30s_infinite] texthome rounded-full bg-white h-[38%] w-[30%] flex justify-center items-center text-2xl'>
                    EXPLORE
                </div>
                    
            </div>
        </div>

    </div>
  )
}
