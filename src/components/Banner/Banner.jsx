import React from 'react'
import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'

const Banner = () => {
    return (
        <div className='py-10 bg-black_blue min-h-screen'>
            <div className='flex-col gap-y-10 flex md:flex-row md:justify-between md:items-center max-w-[540px] lg:max-w-[1200px] mx-auto md:px-10'>
                <div>
                    <BannerLeft/>
                </div>
                <div>
                    <BannerRight/>
                </div>
            </div>
        </div>
    )
}

export default Banner