/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: Number(),
    total: Number()
  },
  reducers: {
    addProduct: (state, { payload }) => {
      Object.assign(state, {
        quantity: state.quantity + 1,
        products: [...state.products, payload],
        total: payload.price * payload.quantity
      })
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
