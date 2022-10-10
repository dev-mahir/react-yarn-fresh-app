import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({ open }) => {

    if (open === "all") {
        return (
            <>
                <div className='mobile all'>
                    <Link to="/">
                        <div className='bg-dark_blue p-6 rounded-xl space-y-5 group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2'>
                            <h3 className='text-light_red font-semibold text-xl group-hover:text-white duration-300'>Web Development</h3>
                            <p className='text-light_gray text-[17px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </p>
                            <div className='overflow-hidden rounded-md'>
                                <img src="/images/banner/banner.jpg" alt="" className='w-full mx-auto  group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md' />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mobile all'>
                    <Link to="/">
                        <div className='bg-dark_blue p-6 rounded-xl space-y-5 group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2'>
                            <h3 className='text-light_red font-semibold text-xl group-hover:text-white duration-300'>Web Development</h3>
                            <p className='text-light_gray text-[17px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </p>
                            <div className='overflow-hidden rounded-md'>
                                <img src="/images/banner/banner.jpg" alt="" className='w-full mx-auto  group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md' />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='desktop all'>
                    <Link to="/">
                        <div className='bg-dark_blue p-6 rounded-xl space-y-5 group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2'>
                            <h3 className='text-light_red font-semibold text-xl group-hover:text-white duration-300'>Web Development</h3>
                            <p className='text-light_gray text-[17px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </p>
                            <div className='overflow-hidden rounded-md'>
                                <img src="/images/banner/banner.jpg" alt="" className='w-full mx-auto  group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md' />
                            </div>
                        </div>
                    </Link>
                </div>
            </>

        )
    }
    if (open === "web") {
        return (
            <>
                <div className='desktop all'>
                    <Link to="/">
                        <div className='bg-dark_blue p-6 rounded-xl space-y-5 group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2'>
                            <h3 className='text-light_red font-semibold text-xl group-hover:text-white duration-300'>Web Development</h3>
                            <p className='text-light_gray text-[17px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </p>
                            <div className='overflow-hidden rounded-md'>
                                <img src="/images/banner/banner.jpg" alt="" className='w-full mx-auto  group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md' />
                            </div>
                        </div>
                    </Link>
                </div>
            </>

        )
    }
    if (open === "mobile") {
        return (
            <>
                <div className='desktop all'>
                    <Link to="/">
                        <div className='bg-dark_blue p-6 rounded-xl space-y-5 group border-2 border-transparent duration-300 hover:border-light_gray hover:border-2'>
                            <h3 className='text-light_red font-semibold text-xl group-hover:text-white duration-300'>Web Development</h3>
                            <p className='text-light_gray text-[17px]'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </p>
                            <div className='overflow-hidden rounded-md'>
                                <img src="/images/banner/banner.jpg" alt="" className='w-full mx-auto  group-hover:scale-125 group-hover:rounded-md duration-500 rounded-md' />
                            </div>
                        </div>
                    </Link>
                </div>
            </>

        )
    }



}

export default PortfolioItem