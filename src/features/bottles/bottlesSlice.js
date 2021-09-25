import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  bottles: [null, null, null],
  currentBottle: {
    1: 0,
    5: 0,
    10: 0,
    25: 0,
  },
}

function isTheEmpyButtles(state) {
  const index = state.bottles.findIndex((e) => e == null)
  if (index !== -1) {
    return true
  }
  return false
}

export const bottlesSlice = createSlice({
  name: "bottles",
  initialState,
  reducers: {
    addCoin(state, { payload }) {
      if (isTheEmpyButtles(state)) {
        state.currentBottle[payload.coin] += 1
      }
    },
    clearCoins(state) {
      state.currentBottle = initialState.currentBottle
    },
    bottleDone(state) {
      const index = state.bottles.findIndex((e) => e == null)
      if (index !== -1) {
        state.bottles[index] = state.currentBottle
        state.currentBottle = initialState.currentBottle
      }
    },
    clearBottle(state, { payload }) {
      state.bottles[payload.num] = null
    },
  },
})

export const { addCoin, clearCoins, bottleDone, clearBottle } =
  bottlesSlice.actions

export default bottlesSlice.reducer
