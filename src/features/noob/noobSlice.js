import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'noob',
  initialState: {
    value: 0,
  },
  reducers: {
    plusOne: (state) => {
      state.value += 1
    },
    minusOne: (state) => {
      state.value -= 1
    },
    plus: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { plusOne, minusOne, plus } = slice.actions
export default slice.reducer
export const selectNoob = (state) => state.noob.value
