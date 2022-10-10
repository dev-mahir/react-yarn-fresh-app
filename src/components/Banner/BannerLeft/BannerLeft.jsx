import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BannerLeft = () => {
    return (
        <div>
            <div className='space-y-6'>
                <h3 className='__subtitle pl-10 text-light_red font-bold text-xl after:bg-light_red after:w-[40%] after:left-0 '>Hello</h3>
                <h1 className='text-white font-bold text-5xl '>I'm Md Mahir</h1>
                <h3 className='text-light_red font-bold text-xl'>Mern Stack Developer</h3>
                <div className='flex'>
                    <button className='text-light_red font-bold bg-dark_blue  border border-light_red px-6 py-2 rounded-md'>Hire Me</button>
                    <button className='text-light_red hover:text-light_gray dura font-bold flex items-center px-6 py-2 rounded-md underline'> Download Cv <AiOutlineDownload className='text-xl' /> </button>
                </div>
            </div>
            <div className='text-light_gray flex items-center mt-14' >
                <h5 className='font-bold '> Follow Me &nbsp; - &nbsp;</h5>
                <div className='flex space-x-4' > 
                    <a href="https://www.facebook.com/developermahir" rel="noreferrer" target='_blank' className='hover:text-light_red'> <FaFacebookF/> </a>
                    <a href="https://www.linkedin.com/in/dev-mahir/" rel="noreferrer" target='_blank'  className='hover:text-light_red'> <FaLinkedinIn/> </a>
                    <a href="https://www.linkedin.com/in/dev-mahir" rel="noreferrer" target='_blank'  className='hover:text-light_red'> <FaInstagram/> </a>
                </div>
            </div>
        </div>

    )
}

export default BannerLeft