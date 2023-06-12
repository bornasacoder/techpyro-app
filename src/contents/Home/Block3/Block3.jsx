import React from 'react'

function Block3() {
  return (
    <div className='flex md:flex-row flex-col mt-32 justify-between '>
        <div className='w-[90%] md:w-[60%] '>
            <img src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-features.6cf4c3d4.png&w=3840&q=75" alt="" />
        </div>
        <div className='md:mt-0 mt-5'>
            <p className='text-gray-600'>BENEFITS</p>
            <h1 className='text-3xl font-bold mt-3'>Happening cities</h1>
            <p className='mt-[60px] flex items-center'><span className='bg-blue-200 rounded-2xl text-sm font-semibold text-violet-900 p-1'>Advertising</span></p>
            <h3 className='mt-[25px] text-xl font-bold'>Cost-effective advertising</h3>
            <p className='mt-[18px] text-gray-400 font-normal text-lg'>With a free listing, you can advertise your rental with <br/> no upfront costs</p>
            <p className='mt-9 flex items-center'><span className='bg-green-300 rounded-2xl text-sm font-semibold text-green-900 p-1'>Exposure</span></p>
            <h3 className='mt-[20px] text-xl font-bold'>Reach millions with Chisfis</h3>
            <p className='mt-[18px] text-gray-400 font-normal text-lg'>Millions of people are searching for unique places to <br />stay around the world</p>
            <p className='mt-9 flex items-center'><span className='bg-red-300 text-center  rounded-2xl text-sm font-semibold text-red-800 p-[5px]'>Secure</span></p>
            <h3 className='mt-[20px] text-xl font-bold'>Secure and simple</h3>
            <p className='mt-[18px] text-gray-400 font-normal text-lg'>A Holiday Lettings listing gives you a secure and easy<br/> way to take bookings and payments online</p>
        </div>
    </div>
  )
}

export default Block3