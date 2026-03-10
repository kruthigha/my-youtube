import { configureStore } from "@reduxjs/toolkit";
import appReducer from './slice'
import searchReducer from "./searchSlice";

const appStore =  configureStore({
    reducer : {
        app : appReducer,
        search : searchReducer
    }
})

export default appStore
