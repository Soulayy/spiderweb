import "./Technology.css"
import Navbar from './../Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from "./../../Json/data.json"



export default function Technology() {
  const technology = Data.technology

  const {it} = useParams()

  const techno = technology[it]

  const imagePath = new URL(
      `../../assets/technology/${techno.images.portrait}`,
      import.meta.url
    ).href;

  return (
<div id='technology' className='w-screen h-screen pt-[50px] flex flex-col '>
        <Navbar/>

        <div className='flex gap-8 ms-[10%] mt-[20px] '>
            <p className='text-gray-500 text-[30px]'>03</p>
            <p className='text-white text-[30px] '>SPACE LAUNCH 101</p>
        </div>

        <div className='w-screen h-[400px] mt-[50px] flex'>

            <div className='w-[50%] h-[100%] flex flex-col ms-[100px] mt-[50px]'>

                <div className='flex gap-10'>
                    {
                        technology.map((element,key)=>{
                            return (
                                
                                    <Link key={key} to={`/technology/${key}`} className="border-b-2 bg-white rounded-[50%] w-[20px] h-[20px] border-b-white border-solid " >

                                    </Link>
                                
                            )
                        })

                    }

                </div>
                <div className='flex flex-col gap-[10px]'>
                    <p className='text-[70px] text-white'>
                        {techno.name}   
                    </p>
                    <p className='text-white w-[40%]'>
                        {techno.description}
                    </p>
                    <div className='w-[70%] h-[3px] bg-gray-500 mt-10'></div>
                    <div className='w-[70%] flex flex-col justify-around items-end'>

                    </div>
                </div>



            </div>

            <div className='w-[50%] h-[100%] items-start flex justify-center'>
                <div>
                    <img className='h-[400px]' src={imagePath} alt="" />
                </div>
            </div>


        </div>

    </div>
  )
}