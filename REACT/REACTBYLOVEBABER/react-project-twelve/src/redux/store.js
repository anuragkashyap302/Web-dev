import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
//steps
// create store
// wrap app components under provvider
//createslice
//register reucer in store