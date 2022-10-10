import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../icon/MenuIcon'

const Navbar = () => {

    const [open, setOpen] = useState(true)
    const openMobileMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            <header className="relative bg-black_blue w-full h-full lg:pl-8 lg:static lg:py-6 px-10 border-b border-gray-800">
                <div className='flex justify-between py-4 lg:py-0 lg:max-w-[1140px] lg:px-3'>
                    <div>
                        <Link to="/" className='text-light_red text-2xl font-bold'> Md Mahir</Link>
                    </div>
                    <div className={open ? '_menu z-50 fixed top-16 -translate-x-60 duration-200 h-full lg:static flex flex-col  lg:w-none bg-black_blue lg:flex-row space-y-5 lg:space-y-0 px-14  pt-14 lg:p-0 lg:space-x-6' : '_menu fixed top-16 z-50 -translate-x-10 h-full lg:static flex flex-col duration-300 lg:w-none bg-black_blue lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 px-14 pt-14 lg:p-0'}>
                        <Link to="/" className='text-light_red font-bold __menu_active after:bg-light_red hover:text-light_red'>Home</Link>
                        <Link to="/about" className='text-light_gray font-bold  __menu_hover after:bg-light_red hover:text-light_red'>About Me</Link>
                        <Link to="/services" className='text-light_gray font-bold  __menu_hover after:bg-light_red hover:text-light_red'>Services</Link>
                        <Link to="/portfolio" className='text-light_gray font-bold  __menu_hover after:bg-light_red hover:text-light_red'>Portfolio</Link>
                        <Link to="/contact" className='text-light_gray font-bold  __menu_hover after:bg-light_red hover:text-light_red'>Contact Me</Link>
                    </div>

                    <div onClick={openMobileMenu} className='block lg:hidden cursor-pointer '>
                        <MenuIcon />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar