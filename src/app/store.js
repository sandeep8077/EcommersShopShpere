import { configureStore } from "@reduxjs/toolkit";
import authReducers from  '../features/auth/authSlice';
import productReducers from '../features/products/productSlice';
import cartReducers from '../features/cart/cartSlice'
import wishListReducers from '../features/wishList/wishListSlice';
import checkoutReducers from '../features/checkout/checkoutSlice';
import notificationReducers from '../features/notification/notificationSlice';
import { notificationMiddleware } from "../middleware/notificationMiddleware";

export const store = configureStore({
    reducer:{
           auth:authReducers,
           products:productReducers,
           cart:cartReducers,
           wishlist:wishListReducers,
           checkout:checkoutReducers,
           notifications:notificationReducers,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(notificationMiddleware)

});
