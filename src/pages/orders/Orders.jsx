import React from 'react'
import {  navData } from '../../constants/Constant'
import Block1 from '../../contents/orders/order/block1/Block1'
import PageHeader from '../../contents/orders/order/pageHeader/PageHeader'
import Navbar from '../../layout/mainLayout/navbar/Navbar'

const Orders = () => {
  return (
    <>
        <Navbar menu={'none'} arrow={'block'} logo={'TechPyro'}/>
        <PageHeader navData={navData}/>
        <Block1/>
    </>
  )
}

export default Orders