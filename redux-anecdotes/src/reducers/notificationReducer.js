import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: '' }

const notificationSlicer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateMessage(state, action) {
      state.message = action.payload
    },
    clearMessage(state) {
      state.message = '' 
    }
  }
})

export const { updateMessage, clearMessage } = notificationSlicer.actions
export default notificationSlicer.reducer
