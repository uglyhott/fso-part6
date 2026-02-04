import { createSlice } from "@reduxjs/toolkit";

const notificationSlicer = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    updateMessage(state, action) {
      return action.payload
    },
    clearMessage() {
      return ''
    }
  }
})

export const { updateMessage, clearMessage } = notificationSlicer.actions
export default notificationSlicer.reducer
