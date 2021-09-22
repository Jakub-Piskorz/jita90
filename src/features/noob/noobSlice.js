import { createSlice } from '@reduxjs/toolkit'

export const noobSlice = createSlice({
  name: 'noob',
  initialState: {
    value: 0,
  },
  reducers: {
    invite: (state) => {
      state.value++
    },
    pwn: (state) => {
      state.value--
    },
    teamfight: (state, action) => (state.value += action.payload),
  },
})

export const { invite, pwn, teamfight } = noobSlice.actions
export default noobSlice.reducer
