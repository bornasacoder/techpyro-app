import React from 'react'
import Block1 from '../../contents/orders/orderDetails/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import {  navData } from '../../constants/Constant'
import PageHeader from '../../contents/orders/orderDetails/pageHeader/PageHeader'

export default function OrderDetails() {
  return (
    <div>
        <Navbar/>
        <PageHeader navData={navData}/>
        <Block1/>
    </div>
  )
}
