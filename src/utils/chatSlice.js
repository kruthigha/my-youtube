import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length >= 25) {
        state.message.shift();
        // state.message.splice(0,1)
      }
      state.message.unshift(action.payload);
    },
  },
});
export const { addMessage, removeMessage } = chatSlice.actions;
export default chatSlice.reducer;
