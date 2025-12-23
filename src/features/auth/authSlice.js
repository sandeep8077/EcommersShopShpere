import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user:null,
  isAuthenticated:false
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logginSuccess(state,action){
         state.isAuthenticated= true;
         state.user = action.payload;
        },
        logout(state){
          state.isAuthenticated = false;
          state.user = null;
        }
    }

})

export const {logginSuccess,logout} = authSlice.actions;
export default authSlice.reducer;