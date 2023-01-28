import React from 'react'
import Block1 from '../../contents/orders/orderDetails/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import {  navData } from '../../constants/Constant'
import PageHeader from '../../contents/orders/orderDetails/pageHeader/PageHeader'
import Block2 from '../../contents/orders/orderDetails/block2/Block2'

export default function OrderDetails() {
  return (
    <div>
        <Navbar menu={'none'} arrow={'block'} logo={'TechPyro'}/>
        <PageHeader navData={navData}/>
        <Block1/>
        <Block2/>
    </div>
  )
}
