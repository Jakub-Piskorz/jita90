import { configureStore } from '@reduxjs/toolkit'
import noobSlice from './features/noob/noobSlice'

export default configureStore({
  reducer: {
    noob: noobSlice,
  },
})
