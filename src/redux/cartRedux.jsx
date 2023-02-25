import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        updateList:{"products":[]},
        cartId:null,
        quantity: 0,
        total: 0,
        totalCart: 0
    },
    reducers: {
        addProduct: (state, action) =>{
            state.products.length=0;
            state.updateList.products.length=0;
            state.cartId=null;
            state.quantity=0;
            state.total=0;
            state.totalCart= 0;

            state.quantity += action.payload.products.length;
            state.products.push(...action.payload.products);
            state.cartId = action.payload.id;
            state.products.map((item)=>{
               item && state.updateList.products.push({
                    "productId": `${item.productId.id}`,
                    "qty": item.qty,
                    "packageId": `${item.packageId}`,
                })
                state.total += item.productId.price.cost * item.qty;
                state.totalCart += item.productId.price.mrp * item.qty;

                return 0;
            })
        },
        increaseQty:(state,action) =>{
            state.updateList.products[action.payload].qty += 1;
        },
        decreaseQty:(state,action) =>{
            state.updateList.products[action.payload].qty -= 1;
        },
        removeItem:(state,action) =>{
            state.updateList.products.splice(action.payload,1);
        },
        addItem:(state,action) =>{
            state.updateList.products.push(action.payload);
        }
    },
});

export const {addProduct,increaseQty,decreaseQty,removeItem,addItem} = cartSlice.actions;
export const cartValue =(state) => state.cart;
export default cartSlice.reducer;