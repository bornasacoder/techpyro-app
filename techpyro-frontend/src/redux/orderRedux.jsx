import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        products:[],
        productList:[],
        clickIndex:null
    },
    reducers: {
        addOrderProduct: (state, action) =>{
            state.products.unshift(...action.payload.products);
        },
        addProductDetails:(state, action) =>{
            state.productList.unshift(...action.payload);
        },
        updateIndex:(state,action) =>{
            state.clickIndex=action.payload;
        },
        clearOrders:(state) =>{
            state.products.length=0;
            state.productList.length=0;
            state.clickIndex=null;
        }
        
    },
});

export const {addOrderProduct,addProductDetails,clearOrders} = orderSlice.actions;
export const orderValue =(state) => state.order;
export default orderSlice.reducer;