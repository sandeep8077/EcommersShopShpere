import { act } from "react";
import { showNotification } from "../features/notification/notificationSlice";

export const notificationMiddleware = (store) =>{
    return (next)=>{
        return (action)=>{
            const result = next(action);
            if(action.type ==='cart/addToCart'){
                store.dispatch(showNotification({
                    message:"Item Added Successfully",
                    type:"success",
                }))

            }

            if(action.type ==='cart/removeToCart'){
                store.dispatch(showNotification({
                    message:"Removed To Cart",
                    type:"info"
                }))
            }

            if(action.type === 'cart/clearCart'){
                store.dispatch(showNotification({
                    message:"Your Cart is Cleared!!",
                    type:"warning"
                }))
            }

            if(action.type === 'checkout/placeOrder'){
                store.dispatch(showNotification({
                    message:"Ordered! Successful"
                }))
            }


            return result;
        }
    }
}