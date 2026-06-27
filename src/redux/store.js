import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './slices/student';

export const store = configureStore({
  reducer: {
    studentReducer,
  },
})