import React from 'react'
import { MdOutlineComputer } from 'react-icons/md'

const BannerRight = () => {
    return (
        <div>
            <div className='bg-dark_blue opacity-60'>
                <img src="/images/banner/banner.jpg" alt="" className='max-w-[500px] mx-auto rounded-md' />
            </div>

            <div className='text-end -mt-7 animate-pulse '>
                <div className=' items-center px-5 py-1 rounded-md gap-x-3 inline-flex' style={{ background: "rgba(66, 48, 51, .5)" }}>
                    <div>
                        <MdOutlineComputer className='text-light_red text-3xl' />
                    </div>
                    <div className='text-light_gray'>
                        <h6 className='font-bold '>Experience</h6>
                        <span> <span className='text-white text-2xl'>2</span> Years</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerRight