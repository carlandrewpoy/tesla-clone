import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../features/car/carSlice'
//export
export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
