import { createSlice } from "@reduxjs/toolkit";

const initialState={};
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        add(state, action){
            return state=action.payload;
        },
        remove(state,action){
            return state= {};
        }
    }
})

export const {add,remove} = userSlice.actions;
export default userSlice.reducer;