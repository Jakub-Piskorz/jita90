import { createSlice } from '@reduxjs/toolkit';

const likenormal = createSlice({
  name: 'likenormal',
  initialState: {
    value: [
      { name: 'jungle', id: 1, price: 500, max: 2 },
      { name: 'desert', id: 2, price: 600, max: 3 },
    ],
  },
  reducers: {
    setLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLocation } = likenormal.actions;
export default likenormal.reducer;
