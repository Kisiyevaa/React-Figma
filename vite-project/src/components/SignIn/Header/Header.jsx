import React from 'react'
import {Link} from "react-router-dom"
import {HiMenu} from 'react-icons/hi'
function Header() {
  return (
    <div className='bg-[#2900FF] text-white px-10 md:p-0 '>
         <div className='container mx-auto flex justify-between items-center  h-[75px]'>
        <h2 className="font-bold text-[24px]">didpool</h2>
         <nav className='hidden md:block'>
           <ul className='flex text-[16px] leading-[24px]'>
            <li className='mx-3'> <Link>About us</Link></li>
            <li className='mx-3'><Link>Products</Link></li>
            <li className='mx-3'><Link>Features</Link></li>
            <li className='mx-3'><Link>Our Blog</Link></li>
            <li className='mx-3'><Link>Pricing</Link></li>
           </ul>
        </nav>
        <div className='block md:hidden text-[30px]'>
           <HiMenu/>
           </div>
        <div className='hidden md:block'>
            <Link className='bg-white text-[#2900FF] rounded px-3 py-2 text-[14px]'>
               Sign Up
            </Link>
            <Link className='bg-[#6B50F6] text-white rounded px-3 py-2 text-[14px] inline-block ml-3'>
               Log in
            </Link>
        </div>
    </div>
    </div>
   
  )
}

export default Header