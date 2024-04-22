import React from 'react'
import Navbar from './../Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import "./Crew.css"

import Data from "./../../Json/data.json"

export default function Crew() {
  const team = Data.crew;
  
  const {ic} = useParams();
  const choixteam = team[ic]
  
  const imagePathc = new URL(
    `../../assets/crew/${choixteam.images.png}`,
    import.meta.url
  ).href; 

  return (
    <div className='myCREW h-screen w-screen pt-6'>
        <Navbar></Navbar>
        <div className='h-[10%] w-[80%] flex justify-start items-center ps-28  text-white text-3xl'>
          <h1><span> 02 </span>PICK YOUR CREW</h1>
        </div>
      <div className='h-[75%] w-full flex justify-center items-center'>

          <div className='h-[100%] w-[90%]  text-white flex'>
            
            <div className='h-[100%] w-1/2 '>
            <div className='h-[65%]  flex flex-col p-8 '>
                <div className='h-[40%] w-[90%] flex justify-center items-start flex-col'>
                  <p className='text-white text-4xl'>{choixteam.role}</p>
                  <p className='text-white text-7xl'>{choixteam.name}</p>
                </div>
                <div className='h-[40%] w-[70%] flex justify-center items-center flex-col pt-14'>
                  <p>{choixteam.bio}</p>
                </div>
              </div>
              <div className='h-[15%] w-[30%] flex justify-around items-end text-2xl'>
               {
                team.map((element, key) => {
                  return(
                    <Link className='selectC' key={key} to={`/crew/${key}`}>
                      <div className='C w-3 h-3 bg-gray-500 rounded-xl'></div>
                    </Link>
                  )
                })
               }
              </div>
              
            </div>
            <div className='h-[100%] w-1/2 flex justify-center items-end pb-2'>
              <img className='h-[100%]' src={imagePathc} />
            </div>
            </div>
          </div>
        </div>          
  )
}
