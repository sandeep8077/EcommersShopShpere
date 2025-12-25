import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        addToCart(state,action){
          const item = action.payload;
           const existing = state.items.find((i)=>i.id ==item.id)
           if(existing){
            existing.quantity+=1;
           }
           else{
            state.items.push({...action.payload,quantity:1})
           }
        },

        removeToCart(state,action){
            state.items = state.items.filter((item)=>item.id !==action.payload)


        },

        increateQuantity(state,action){
           
            const existing = state.items.find((i)=>i.id== action.payload);
            if(existing){
                existing.quantity+=1;
            }
        },

        decreaseQuantity(state,action){
            const item = state.items.find((i)=>i.id == action.payload)
            if(item && item.quantity >1){
                item.quantity -=1;
            }

        },

        clearCart(state){
            state.items=[]
        }
    }
})


export const {addToCart,removeToCart,increateQuantity,decreaseQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;