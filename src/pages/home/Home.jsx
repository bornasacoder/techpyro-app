import React, { useEffect } from 'react'
import {  navData, sliderData } from '../../constants/Constant'
import Content from '../../components/content/Content'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import Divider1 from '../../contents/home/divider1/Divider1'
import PageHeader from '../../contents/home/pageHeader/PageHeader' 
import Block1 from '../../contents/home/block1/Block1' 
import Block2 from '../../contents/home/block2/Block2' 
import Block3 from '../../contents/home/block3/Block3' 
import Block4 from '../../contents/home/block4/Block4' 
import Block5 from '../../contents/home/block5/Block5' 
import Block6 from '../../contents/home/block6/Block6' 
import Block7 from '../../contents/home/block7/Block7' 
import Block8 from '../../contents/home/block8/Block8' 
import Block9 from '../../contents/home/block9/Block9' 
import Block10 from '../../contents/home/block10/Block10' 
import Block11 from '../../contents/home/block11/Block11' 
import Block12 from '../../contents/home/block12/Block12' 
import Block13 from '../../contents/home/block13/Block13' 
import Block14 from '../../contents/home/block14/Block14' 
import Block15 from '../../contents/home/block15/Block15' 
import Block16 from '../../contents/home/block16/Block16' 
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/userRedux'
import { cartListProduct, } from '../../redux/apiCalls'
import { addProduct, cartValue } from '../../redux/cartRedux'
import { clearOrders } from '../../redux/orderRedux'

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const cart = useSelector(cartValue);

  useEffect(() => {
    if(user.currentUser!==null ){
        // let query = {"userId":`${user.currentUser.data.id}`,"isDeleted":false}
        // let sort = {"name":1}
        // cartListProduct(query,sort,dispatch)
        // dispatch(addProduct({"products":[],"id":null}));
        // dispatch(clearOrders());
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
      <PageHeader navData={navData}/>
      <Block1/>
      <Block2 sliderData={sliderData[0].website}/>
      <Block3 sliderData={sliderData[0].app}/>
      <Block4 /> 
      <Divider1/>
      <Block5 sliderData={sliderData[0].uiux}   /> 
      <Block6 sliderData={sliderData[0].digital}  />
      <Block7/>
      <Divider1/>
      <Block8 sliderData={sliderData[0].graphics} /> 
      <Block9 sliderData={sliderData[0].logo}  />
      <Block10/>
      <Divider1/>
      <Block11 sliderData={sliderData[0].contentwriting} />
      <Block12 sliderData={sliderData[0].presentation} />
      <Block13/>
      <Divider1/>
      <Block14 sliderData={sliderData[0].videoediting} />
      <Block15  sliderData={sliderData[0].others} />
      <Block16/>
      <Divider1/>
      <Content/>
    </div>
  )
}

export default Home