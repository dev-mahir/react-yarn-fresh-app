import React from 'react'
import Banner from '../components/Banner/Banner'
import WhatIDo from '../components/WhatIDo/WhatIDo'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonial from '../components/Testimonial/Testimonial'


const Home = () => {
    return (
        <>
            <Banner />
            <WhatIDo />
            <About />
            <Portfolio />
            <Testimonial/>
        </>
    )
}

export default Home