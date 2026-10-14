import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { current: null, history: [] },
  reducers: {
    setCurrentBooking(state, action){ state.current = action.payload },
    clearCurrentBooking(state){ state.current = null },
    addBookingHistory(state, action){ state.history.unshift(action.payload) }
  }
})

export const { setCurrentBooking, addBookingHistory, clearCurrentBooking } = bookingSlice.actions
export default bookingSlice.reducer
