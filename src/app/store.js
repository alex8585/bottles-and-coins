import { configureStore } from "@reduxjs/toolkit"
import bottlesReducer from "../features/bottles/bottlesSlice"

export const store = configureStore({
  reducer: {
    bottles: bottlesReducer,
  },
})
