/* eslint-disable no-underscore-dangle */
// @ts-nocheck
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
      state.quantity += 1
      state.products = [...state.products, payload]
      state.total += payload.price * payload.qte
    },
    updateProduct: (state, { payload }) => {
      state.products = state.products.map((x) =>
        x._id === payload.id ? { ...x, qte: x.qte + payload.qte } : x
      )
      state.total += payload.qte < 1 ? -payload.price : payload.price
    },
    initializeCart: (state) => {
      state.quantity = 0
      state.products = []
      state.total = 0
    }
  }
})

export const { addProduct, updateProduct, initializeCart } = cartSlice.actions
export default cartSlice.reducer
