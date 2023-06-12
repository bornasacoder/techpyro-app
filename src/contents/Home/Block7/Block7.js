import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Block7() {
  return (
    <div className='flex justify-around items-center mt-32 md:flex-row flex-col'>
        <div className='ml-2'>
            <h1 className='text-3xl  font-semibold py-2'>Join our newsletter</h1>
            <p className='text-gray-400 text-xl py-6'>Read and share new perspectives on just about any topic.<br></br> Everyone’s welcome.</p>
            <div className='flex gap-4 mt-2'>
            <span className='bg-blue-300 rounded-2xl text-lg font-semibold text-blue-900 px-2 py-1'> 01 </span>
            <h4 className='text-black-400 font-semibold text-lg'>   Get more discount</h4>
            </div>
            <div className='flex gap-4 mt-2'>
            <span className='bg-red-300 rounded-2xl text-lg font-semibold text-red-900 px-2 py-1'> 02 </span>
            <h4 className='text-black-400 font-semibold text-lg'>  Get premium magazines</h4>
            </div>
            <div className='border-black border w-80 flex justify-around h-14 rounded-full items-center  mt-10 ml-4'>
                <input type='email' placeholder='Enter your email' className='px-4 text-[20px]'/>
                <div className='bg-blue-700 rounded-full h-11 mr-1 px-2 items-center flex'>
                    <ArrowForwardIcon  />
                </div>
            </div>
            

        </div>
        <div className='flex justify-center items-center mr-2 md:mt-0 mt-5'>
            <img src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&w=3840&q=75" alt=""  className='md:w-[700px] md:h-[500px] w-full h-[230px]'/>
            
        </div>
    </div>
  )
}

export default Block7
