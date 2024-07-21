import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart : []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id != action.payload)
        },
        resetCart:(state)=>{
            state.cart =[]
        }
    }
})

export const {addCart,removeCart,resetCart} = cartSlice.actions;
export default cartSlice.reducer;