import React from 'react'

import img1 from '../../../constants/Home/Block5/img1.jpg';
import img2 from '../../../constants/Home/Block5/img2.webp';
import img3 from '../../../constants/Home/Block5/img3.webp';
import img4 from '../../../constants/Home/Block5/img4.jpg';


function Block5() {
  return (
    <div className='w-[100%] md:h-[600px]  '>
        <div className='flex justify-center flex-col h-28 items-center mt-[100px]'>
            <h1 className='text-black font-bold text-5xl'>How it work</h1>
            <p className='text-gray-300 font-semibold text-xl'>Keep calm & travel on</p>
        </div>
        <div  className='flex md:justify-around justify-evenly  mt-[80px] relative flex-col md:flex-row' >
            <div className='z-10 flex flex-col justify-center items-center md:mb-0 mb-10'>
                <img src={img1} alt="" className='w-48 '/>
            
                <h1 className='text-xl text-black font-bold mt-9'>Book & relax</h1>
                <p className='text-[18px] text-gray-400 font-normal mt-9'>Let each trip be an inspirational journey,<br></br>each room a peaceful space</p>
                
            </div>
            <div className='z-10 flex flex-col justify-center items-center md:mb-0 mb-10'>
                <img src={img2} alt="" className='w-48 '/>
                <h1 className='text-xl text-black font-bold mt-9'>Smart checklist</h1>
                <p className='text-[18px] text-gray-400 font-normal mt-9 '>Let each trip be an inspirational journey,<br></br>each room a peaceful space</p>
            </div>
            <div className='z-10 flex flex-col justify-center items-center md:mb-0 mb-10'>
                <img src={img3} alt="" className='w-48 '/>
                <h1 className='text-xl text-black font-bold mt-9'>Book & relax</h1>
                <p className='text-[18px] text-gray-400 font-normal mt-9 '>Let each trip be an inspirational journey,<br></br>each room a peaceful space</p>
            </div>
            <img src={img4} alt="" className='w-full absolute z-1 mt-8'/>
        </div>
        
        
      
    </div>
  )
}

export default Block5
