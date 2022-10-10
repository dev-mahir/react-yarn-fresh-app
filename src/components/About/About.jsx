import React from 'react'
import AboutLeft from './AboutLeft/AboutLeft'
import AboutRight from './AboutRight/AboutRight'

const About = () => {
    return (
        <div className='bg-black_blue py-14'>
            <div className='lg:max-w-[1200px] max-w-[540px] px-5 gap-y-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center'>
                <AboutLeft />
                <AboutRight />
            </div>
        </div>
    )
}

export default About