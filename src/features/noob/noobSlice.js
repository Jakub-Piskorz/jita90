import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'noob',
  initialState: {
    value: 0,
  },
  reducers: {
    invite: (state) => {
      state.value += 1
    },
    pwn: (state) => {
      state.value -= 1
    },
    teamfight: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { invite, pwn, teamfight } = slice.actions
export default slice.reducer
export const selectNoob = (state) => state.noob.value
