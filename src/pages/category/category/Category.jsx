import React from 'react'
import {navData} from '../../../constants/websites/PageHeader'
import {EducationProducts} from '../../../constants/websites/Education'
import {HotelsProducts} from '../../../constants/websites/Hotel'
import {RestaurantsProducts} from '../../../constants/websites/Restaurant'
import {ShopsProducts} from '../../../constants/websites/Shop'
import {NewsProducts} from '../../../constants/websites/News'
import {RealEstateProducts} from '../../../constants/websites/RealEstate'

import Content from '../../../components/content/Content'
import Navbar from '../../../layout/mainLayout/navbar/Navbar'

import Divider1 from '../../../contents/website/divider1/Divider1'
import PageHeader from '../../../contents/website/pageHeader/PageHeader' 
import Block1 from '../../../contents/website/block1/Block1' 
import Block2 from '../../../contents/website/block2/Block2' 
import Block3 from '../../../contents/website/block3/Block3' 
import Block4 from '../../../contents/website/block4/Block4' 
import Block5 from '../../../contents/website/block5/Block5' 
import Block6 from '../../../contents/website/block6/Block6' 
import Block7 from '../../../contents/website/block7/Block7' 
import Block8 from '../../../contents/website/block8/Block8' 
import Block9 from '../../../contents/website/block9/Block9' 
// import Block10 from '../../../contents/website/block10/Block10' 
// import Block11 from '../../../contents/website/block11/Block11' 
// import Block12 from '../../../contents/website/block12/Block12' 
// import Block13 from '../../../contents/website/block13/Block13' 
// import Block14 from '../../../contents/website/block14/Block14' 
// import Block15 from '../../../contents/website/block15/Block15' 
import Block16 from '../../../contents/website/block16/Block16' 

export default function Category() {
  console.log(RestaurantsProducts);
  return (
    <div>
      <Navbar menu={'none'} arrow={'block'} logo={'Website'}/>
      <PageHeader navData={navData}/>
      <Block1/>
      <Block2 key={EducationProducts} websitesData={EducationProducts}/>
      <Block3 key={HotelsProducts} websitesData={HotelsProducts}/>
      <Block4 key={EducationProducts} websitesData={EducationProducts}/> 
      <Divider1/>
      <Block5 key={RestaurantsProducts} websitesData={RestaurantsProducts}   /> 
      <Block6 key={ShopsProducts} websitesData={ShopsProducts}  />
      <Block7/>
      <Divider1/>
      <Block8 key={NewsProducts} websitesData={NewsProducts} /> 
      <Block9 key={RealEstateProducts} websitesData={RealEstateProducts} />
      {/* <Block10/>
      <Divider1/>
      <Block11 key={sliderData} sliderData={sliderData[0].contentwriting} />
      <Block12 key={sliderData} sliderData={sliderData[0].presentation} />
      <Block13/>
      <Divider1/>
      <Block14 key={sliderData} sliderData={sliderData[0].videoediting} />
      <Block15 key={sliderData}  sliderData={sliderData[0].others} /> */}
      <Block16/>
      <Divider1/>
      <Content/>
    </div>
  )
}
