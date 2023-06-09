import React from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function Header() {
    const location = useLocation()
    console.log(location.pathname)
    const pathMathRoute = (route)=>{
        if(route===location.pathname){
            return true;
        }
    }
  return (
   <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
     <header className=' px-3 max-w-6xl mx-auto flex items-center justify-between'>
        <Link to={"/"}>
        <div>
            <img className='h-5 cursor-pointer ' src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo'/>
        </div>
        </Link>
        <div>
            <ul className='flex space-x-10'>
               <Link to={"/"}>
               <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/")&& "text-black border-b-red-500"}`} >Home</li>
               </Link>
                <Link to={"/offers"}>
                <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers")&& "text-black border-b-red-500"}`}>Offer</li>
                </Link>
               <Link to={"/sign-in"}>
               <li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")&& "text-black border-b-red-500"} `}>Sign in</li>
               </Link>
            </ul>
        </div>
    </header>
   </div>
  )
}
