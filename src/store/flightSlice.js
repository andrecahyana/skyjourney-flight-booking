import { createSlice } from '@reduxjs/toolkit'

const flightSlice = createSlice({
  name: 'flights',
  initialState: { items: [] },
  reducers: {
    setFlights(state, action){ state.items = action.payload }
  }
})

export const { setFlights } = flightSlice.actions
export default flightSlice.reducer
