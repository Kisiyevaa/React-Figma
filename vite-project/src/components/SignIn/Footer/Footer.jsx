import React from 'react'
import {Link} from "react-router-dom"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsInstagram} from "react-icons/bs"
function Footer() {
  return (
    <div className='bg-[#060026]'>
        <div className='container mx-auto block md:flex justify-between py-16 px-20 text-center md:text-left'>
        <div>
            <h2 className='text-white text-[40px] font-bold'>didpool</h2>
            <ul className='text-white flex gap-4 pt-8 justify-center '>
              <li className=' border-2 rounded-full p-2 p'><Link><FaFacebookF/></Link></li>
              <li className=' border-2 rounded-full p-2'><Link><FaTwitter/></Link></li>
              <li className=' border-2 rounded-full p-2'><Link><AiOutlineLinkedin/></Link></li>
              <li className=' border-2 rounded-full p-2'><Link><BsInstagram/></Link></li>
            </ul>
        </div>
        <div className='block  md:flex gap-10  text-white leading-9 text-[16px]'>
          <ul className='pt-5 md:pt-0 px-8'>
            <li className='font-semibold text-[18px] '>Our Company</li>
            <li>Our Team</li> 
            <li>Company Vision</li>
            <li>Our History</li>
            <li>Investorys</li>
          </ul>
          <ul className='pt-5 md:pt-0 px-8'>
            <li className='font-semibold text-[18px]'>Our Resources</li>
            <li>The Blog</li>
            <li>Downloads</li>
            <li>Change Log</li>
            <li>Slack Channel</li>
          </ul>
          <ul className='pt-5 md:pt-0 px-8'>
            <li className='font-semibold text-[18px]'>Our Product</li>
            <li>New Features</li>
            <li>Roadmap</li>
            <li>Product Demo</li>
            <li>Pricing</li>
          </ul>
        </div>
        </div>
        <div className='border-t-[1px] border-white '>
          <p className='text-center text-white py-8 text-[14px]' >Copyright 2023 madeofzero</p>
        </div>
    </div>
  )
}

export default Footer