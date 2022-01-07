import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: String(),
    isFetching: Boolean(),
    error: Boolean()
  },
  reducers: {
    loginStart: (state) => {
      Object.assign(state, { isFetching: true })
    },
    loginSuccess: (state, action) => {
      Object.assign(state, { isFetching: false, currentUser: action.payload })
    },
    loginFailure: (state) => {
      Object.assign(state, {
        isFetching: false,
        error: true
      })
    }
  }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
