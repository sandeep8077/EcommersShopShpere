import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addWishListApi, removeToWishListApi } from "./wishListAPI"


export const addAsyncWishlist= createAsyncThunk('wishList/addAsyncWishList',
  async  (item,{rejectWithValue})=>{
        try {
                return await addWishListApi(item);
        } catch (error) {
             return rejectWithValue(item);
        }
    })


export const removeAsyncWishListApi = createAsyncThunk('wishList/removeAsyncWishListApi',
   async (item, {rejectWithValue})=>{
         
    try {
         return await removeToWishListApi(item.id)
    } catch (error) {
       return  rejectWithValue(item);
    }

    }
)




const initialState = {
    items:[]
}

const wishListSlice = createSlice({
    name:'wishList',
    initialState,
    reducers:{
        addOptmisticWishList(state,action){
            state.items.push(action.payload)

        },
        removeOptimisticWishList(state,action){
            state.items = state.items.filter((item)=>item.id !== action.payload)

        }
    },
    extraReducers:(builder)=>{
        builder.
        // rollback add
           addCase(addAsyncWishlist.rejected,(state,action)=>{
               state.items = state.items.filter((item)=>item.id !==action.payload.id)
           }).

        //    rollbac remove
           addCase(removeAsyncWishListApi.rejected,(state,action)=>{
               state.items.push(action.payload);
           })
           
    }
})

export default  wishListSlice.reducer;
export const {addOptmisticWishList,removeOptimisticWishList} = wishListSlice.actions;