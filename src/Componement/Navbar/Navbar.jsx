import Logo from "./../../assets/shared/LOGOSZ.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-[15%] flex justify-center items-center'>
        <div className='h-[90%] w-[10%] flex justify-center items-center'>
            <img src={Logo} />
        </div>
        <div className='h-[90%] w-[30%] flex justify-center items-center'>
            <div className='w-[90%] h-1 bg-white'>

            </div>
        </div>
        <div className='h-[90%] w-[60%] flex justify-center items-center bg-white/20 gap-9 pe-11 text-white font-semibold'>
            <Link to={"/"} className='NavX w-[15%] h-full flex justify-center items-center '>
                <p to={"/"}>Twitter</p>
            </Link>
            <Link to={"/destination/0"} className='NavX w-[15%] h-full flex justify-center items-center'>
                <p to={"/"}>Telegram</p>
            </Link>
            <Link to={"/"} className='NavX w-[15%] h-full flex justify-center items-center'>
                <p>DEX SCREENER</p>
            </Link>
            <Link to={"/"} className='NavX w-[15%] h-full flex justify-center items-center'>
                <p>Raydium</p>
            </Link>
        </div>
    </div>
  )
}
