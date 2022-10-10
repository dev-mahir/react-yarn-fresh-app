import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const AboutLeft = () => {
    return (
        <div className=' md:pl-10 space-y-4'>
            <h3 className='__subtitle pl-10 text-light_red font-bold text-xl after:bg-light_red after:w-[25%] after:left-0 '>About Me</h3>
            <h2 className='text-white font-bold text-3xl leading-10'>
                Hi, Im Here <br />
                To Help Your Next Project
            </h2>
            <p className='text-light_gray '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam earum temporibus sapiente inventore? Voluptates perspiciatis quos a quia maxime.</p>

            <div className='flex gap-x-9 py-4'>
                <div className='space-y-4'>
                    <p className='text-white flex items-center gap-x-2 font-semibold'> <AiOutlineCheck className='text-light_red' /> Problem Solving</p>
                    <p className='text-white flex items-center gap-x-2 font-semibold'> <AiOutlineCheck className='text-light_red' /> Problem Solving</p>
                </div>
                <div className='space-y-4'>
                    <p className='text-white flex items-center gap-x-2 font-semibold'> <AiOutlineCheck className='text-light_red' /> Problem Solving</p>
                    <p className='text-white flex items-center gap-x-2 font-semibold'> <AiOutlineCheck className='text-light_red' /> Problem Solving</p>
                </div>

            </div>

            <button className='text-light_red font-bold bg-dark_blue  border border-light_red px-6 py-2 rounded-md'>My Portfolio</button>
        </div>
    )
}

export default AboutLeft