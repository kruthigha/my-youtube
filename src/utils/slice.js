import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app',
    initialState : {
        isToggleMenu : true
    },
    reducers : {
        toggleSideBar : (state)=>{
            state.isToggleMenu = !state.isToggleMenu 
        },
        closeSideBar : (state)=>{
            state.isToggleMenu = false
        }
    }
})
export const { toggleSideBar, closeSideBar} = appSlice.actions;
export default appSlice.reducer