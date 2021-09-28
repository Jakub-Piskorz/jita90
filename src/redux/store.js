import { configureStore } from '@reduxjs/toolkit'
import noob from './noob/noobSlice'

export default configureStore({
  reducer: {
    noob: noob,
  },
})
