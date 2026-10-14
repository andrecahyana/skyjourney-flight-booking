import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { current: null, history: [] },
  reducers: {
    setCurrentBooking(state, action){ state.current = action.payload }
  }
})

export const { setCurrentBooking } = bookingSlice.actions
export default bookingSlice.reducer
