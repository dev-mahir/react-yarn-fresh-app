import React from 'react'
import Left from './Left/Left'
import Right from './Right/Right'

const WhatIDo = () => {
    return (
        <div className='bg-black_blue py-10'>
            <div className='lg:max-w-[1200px] max-w-[540px] px-5 gap-y-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center'>
                <div className='order-2'><Left/></div>
                <div>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default WhatIDo