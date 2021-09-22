import { configureStore } from '@reduxjs/toolkit'
import noobReducer from './features/noob/noobSlice'

export default configureStore({
  reducer: {
    noob: noobReducer,
  },
})
