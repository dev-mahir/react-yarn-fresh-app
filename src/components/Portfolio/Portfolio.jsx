import React from 'react'
import { useState } from 'react'
import PortfolioItem from './PortfolioItem';


const Portfolio = () => {

    const [open, setOpen] = useState('all');

    const handlePortfolio = (e) => {
        if (e.target.classList.contains('all')) {
            setOpen("all")
        } else if (e.target.classList.contains('web')) {
            setOpen("web")
        } else if (e.target.classList.contains('desktop')) {
            setOpen("desktop")
        }   else if (e.target.classList.contains('mobile')) {
            setOpen("mobile")
        } 
    }

    return (
        <>
            <div className='bg-black_blue py-14'>
                <div className='lg:max-w-[1140px] max-w-[540px] px-5 mx-auto '>
                    <h3 className='__subtitle pl-10 text-light_red font-bold text-xl after:bg-light_red after:w-[22%] after:left-0 '>My Portfolio</h3>
                    <div className='flex  justify-between'>
                        <h2 className='text-white font-bold text-3xl leading-10'>
                            Some Of My Distinguished Works
                        </h2>
                        <div className='flex space-x-5'>
                            <button onClick={handlePortfolio} className='text-light_red font-bold all __menu_active after:bottom-1 after:bg-light_red hover:text-light_red'>All</button>
                            <button  onClick={handlePortfolio}   className='web text-light_gray font-bold  hover:text-light_red duration-300 transition-all'>Web Development</button>
                            <button  onClick={handlePortfolio}  className='desktop text-light_gray font-bold  hover:text-light_red duration-300 transition-all'>Desktop App</button>
                            <button onClick={handlePortfolio}   className='mobile text-light_gray font-bold  hover:text-light_red duration-300 transition-all'>Mobile App</button>
                        </div>
                    </div>






                    <div className='grid grid-cols-3 gap-10 mt-10'>
                        <PortfolioItem open={open} setOpen={setOpen} />
                    </div>




                </div>
            </div>
        </>
    )
}

export default Portfolio