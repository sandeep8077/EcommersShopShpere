import { configureStore } from "@reduxjs/toolkit";
import authReducers from  '../features/auth/authSlice';
import productReducers from '../features/products/productSlice';
import cartReducers from '../features/cart/cartSlice'

export const store = configureStore({
    reducer:{
           auth:authReducers,
           products:productReducers,
           cart:cartReducers
    }

});