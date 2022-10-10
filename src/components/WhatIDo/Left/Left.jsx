import React from 'react'
import { MdOutlinePhoneAndroid } from 'react-icons/md'

const Left = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='row-span-2'>
                    <div className='bg-dark_blue rounded-md flex items-center px-5 py-5 md:py-10 gap-5 mb-7'>
                        <div>
                            <MdOutlinePhoneAndroid className='text-light_red text-6xl' />
                        </div>
                        <div>
                            <h4 className='text-white font-bold text-lg'>Mobile App Development</h4>
                        </div>
                    </div>
                    <div className='bg-dark_blue rounded-md flex items-center px-5 py-5 md:py-10 gap-5'>
                        <div>
                            <MdOutlinePhoneAndroid className='text-light_red text-6xl' />
                        </div>
                        <div>
                            <h4 className='text-white font-bold text-lg'>Website Development</h4>
                        </div>
                    </div>
                </div>
                <div className=' bg-dark_blue rounded-md flex items-center px-5 py-5 md:py-10 gap-5 md:mt-14'>
                    <div>
                        <MdOutlinePhoneAndroid className='text-light_red text-6xl' />
                    </div>
                    <div>
                        <h4 className='text-white font-bold text-lg'>Desktop App Development</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left