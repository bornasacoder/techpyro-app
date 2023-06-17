import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/dried-food-products-sold-market_181624-60209.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-vector/shopping-bag-basket-zero-waste-eco-composition-with-text-tag-discount-flying-products-trolley-cart-illustration_1284-61282.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/superfoods-seeds-grains-vegan-vegetarian-eating-clean-eating_114579-3939.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/grocery-bags-set-plastic-paper-packages-supermarket-basket-with-food-packs-cans-bread-milk-products-flat-vector-illustrations-shopping-food-delivery-charity-concept_74855-10074.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-s-hands-holding-fresh-ripe-organic-broccoli-salad-with-greens-vegetables-cotton-bag-weekend-farmer-s-market_169016-5707.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1232.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/food-cart_1098-14618.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/safe-food-delivery_23-2148573179.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/fresh-supermarket-template-design_23-2149623225.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/brunette-chooses-food-lady-is-holding-shopping-cart-girl-white-shirt-supermarket_1157-42219.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/high-angle-indian-spices-arrangement_23-2148747644.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/top-view-vegetables-fruits-bag_23-2148949707.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'French Fries'},
    ]
  return (
      <Box sx={{margin:{xs:'140px 20px 40px',md:'120px 20px 40px'},display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
