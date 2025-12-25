import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProductsApi } from "./productAPI"

export const fetchAsyncProducts = createAsyncThunk('products/fetchAsyncProducts',
   async (_, {rejectWithValue})=>{
         try {
            return await fetchProductsApi()
         } catch (error) {
            return rejectWithValue(error.message)
         }
    }
)




const initialState = {
    items:[],
    isLoading:false,
    error:null,
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.
          addCase(fetchAsyncProducts.pending,(state)=>{
               state.isLoading= true;
               state.error = null;
          }).
          addCase(fetchAsyncProducts.fulfilled,(state,action)=>{
             state.isLoading = false;
             state.items = action.payload;
            
          }).
          addCase(fetchAsyncProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.error = action.payload
          })
    }
})

export default productSlice.reducer;