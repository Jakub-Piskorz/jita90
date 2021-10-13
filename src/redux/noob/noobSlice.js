import { createSlice } from '@reduxjs/toolkit'

const noobSlice = createSlice({
  name: 'noob',
  initialState: {
    value: ['qbek', 'psikut'],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
      state.value = state.value.filter((n) => n !== action.payload)
    },
    empty: (state) => {
      state.value = []
    },
    reset: (state) => {
      state.value = ['qbek', 'psikut']
    },
  },
})

export const { add, remove, empty, reset } = noobSlice.actions
export default noobSlice.reducer
