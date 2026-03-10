import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search',
    initialState :{
        cacheResults : {}
    },
    reducers : {
        addToCache : (state, action)=>{
            console.log("redux", action.payload)
            state.cacheResults = { ...state.cacheResults, ...action.payload };
        },
    },
})
export const {addToCache} = searchSlice.actions
export default searchSlice.reducer