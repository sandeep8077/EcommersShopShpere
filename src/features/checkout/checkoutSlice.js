import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    step:1,
    address:{

             name:"",
             email:"",
             address:"",
             city:"",
             pin:""
            },
    payment:{
        mode:"COD"
    },
    orderPlace:false
}

const checkoutSlice = createSlice({
    name:"checkout",
    initialState,
    reducers:{
        setAddress(state,action){
            state.address = action.payload;
            state.step=2
        },
        setPayment(state,action){
            state.payment = action.payload;
            state.step =3
        },
        placeOrder(state,action){
            state.orderPlace = action.payload
            state.step = 4
        },
        goBack(state){
            state.step -=1;
        },
        resetCheckout(state){
            return initialState;
        }
    }
})

export const {setAddress,setPayment,placeOrder,goBack,resetCheckout} = checkoutSlice.actions;

export default checkoutSlice.reducer;