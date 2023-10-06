import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState ={
    products:products,
    selectedProducr:null,
};
export const productsSlice =createSlice({
    name:'products',
    
    initialState:initialState ,
    reducers:{
        setselectedProduct: (state,action)=>{
            const productId =action.payload;
            state.selectedProduct=state.products.find((p)=> p.id==productId)
           
        }
    },
})
