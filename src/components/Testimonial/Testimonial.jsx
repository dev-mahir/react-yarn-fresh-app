import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AiFillStar } from 'react-icons/ai'
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Scrollbar} from 'swiper';

const Testimonial = () => {

    return (
        <div className='bg-black_blue py-14'>
            <div className='lg:max-w-[1140px] max-w-[540px] px-5 mx-auto '>
                <h3 className='__subtitle pl-10 text-light_red font-bold text-xl after:bg-light_red after:w-[22%] after:left-0 '>Testimonials</h3>
                <h2 className='text-white font-bold text-3xl leading-10'>WHAT OUR CLIENT SAY</h2>


            </div>


            <div className='max-w-[900px] mx-auto mt-10'>
                <Swiper
                  navigation
                    modules={[Navigation, Autoplay , Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                
                    // scrollbar={{
                    //     hide: false,
                    //   }}
                    autoplay={{
                        delay: 2500,
                    }}
                
                    loop="true"
            

                >
                    <SwiperSlide>
                        <div className='bg-dark_blue p-5'>
                            <div className='flex gap-x-5 items-center'>
                                <div className='border border-light_gray rounded-md p-1'>
                                    <img className='w-20 h-20 object-cover  rounded-md ' src="/images/testimonials/mdmahir.jpg" alt="" />
                                </div>
                                <div>
                                    <h2 className='text-light_gray font-bold text-2xl'>Md Mahir</h2>
                                    <h4 className='text-light_red font-semibold text-lg'>Mern Stack Developer</h4>
                                    <div className='text-light_red flex text-sm'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>

                            </div>
                            <p className='text-light_gray font-lg mt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla, voluptates explicabo eius voluptatum expedita distinctio tempore eos ipsum.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-dark_blue p-5'>
                            <div className='flex gap-x-5 items-center'>
                                <div className='border border-light_gray rounded-md p-1'>
                                    <img className='w-20 h-20 object-cover  rounded-md' src="/images/testimonials/mdmahir.jpg" alt="" />
                                </div>
                                <div>
                                    <h2 className='text-light_gray font-bold text-2xl'>Md Mahir</h2>
                                    <h4 className='text-light_red font-semibold text-lg'>UX/UI Designer</h4>
                                    <div className='text-light_red flex text-sm'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>

                            </div>
                            <p className='text-light_gray font-lg mt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla, voluptates explicabo eius voluptatum expedita distinctio tempore.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-dark_blue p-5'>
                            <div className='flex gap-x-5 items-center'>
                                <div className='border border-light_gray rounded-md p-1'>
                                    <img className='w-20 h-20 object-cover  rounded-md ' src="/images/testimonials/mdmahir.jpg" alt="" />
                                </div>
                                <div>
                                    <h2 className='text-light_gray font-bold text-2xl'>Md Mahir</h2>
                                    <h4 className='text-light_red font-semibold text-lg'>Mern Stack Developer</h4>
                                    <div className='text-light_red flex text-sm'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>

                            </div>
                            <p className='text-light_gray font-lg mt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla, voluptates explicabo eius voluptatum expedita distinctio tempore eos ipsum
                            </p>
                        </div>
                    </SwiperSlide>



                </Swiper>
            </div>



        </div>
    )
}

export default Testimonial