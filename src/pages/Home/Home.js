import React from 'react'
import Block1 from '../../contents/Home/Block1/Block1';
import Nav from '../../layout/Nav';
import Block2 from '../../contents/Home/Block2/Block2';
import  Block2_images from '../../constants/Home/Block2_imges';
import Block3 from '../../contents/Home/Block3/Block3';
import Block4 from '../../contents/Home/Block4/Block4';
import Block4_images from '../../constants/Home/Block4_images';
import Block5 from '../../contents/Home/Block5/Block5';
import Block6 from '../../contents/Home/Block6/Block6';
import Block6_data from '../../constants/Home/Block6_data';
import Block7 from '../../contents/Home/Block7/Block7';
import Block8 from '../../contents/Home/Block8/Block8';
import Block8_data from '../../constants/Home/Block8_data';
import Block9 from '../../contents/Home/Block9/Block9';
import Block9_data from '../../constants/Home/Block9_data';
import Block10 from '../../contents/Home/Block10/Block10';
import Block11 from '../../contents/Home/Block11/Block11';
import Block11_data from '../../constants/Home/Block11_data';
// import Block12 from '../../contents/Home/Block12/Block12';
// import Block12_data from '../../constants/Home/Block12/Block12_data';
import Block13 from '../../contents/Home/Block13/Block13';
import Block14 from '../../contents/Home/Block14/Block14';
function Home() {

  return (
    <div className='bg-blue-100'>
        {/* <Nav /> */}
        <Block1 />
        <Block2 sliderData={Block2_images} />
        <Block3 />
        <Block4 Block4_images={Block4_images}/>
        <Block5 />
        <Block6 Block6_data={Block6_data}/>
        <Block7 />
        <Block8 Block8_data={Block8_data}/>
        <Block9 Block9_data={Block9_data}/>
        <Block10 />
        <Block11 Block11_data={Block11_data}/>
        {/* <Block12 Block12_data={Block12_data}/> */}
        <Block13 />
        <Block14 />
        
    </div>
  )
}

export default Home