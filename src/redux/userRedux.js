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
    },
    logoutStart: (state) => {
      Object.assign(state, { isFetching: true })
    },
    logoutSuccess: (state) => {
      Object.assign(state, { isFetching: false, currentUser: "" })
    },
    logoutFailure: (state) => {
      Object.assign(state, {
        isFetching: false,
        error: true
      })
    },
    signUpStart: (state) => {
      Object.assign(state, { isFetching: true })
    },
    signUpSuccess: (state) => {
      Object.assign(state, { isFetching: false })
    },
    signUpFailure: (state) => {
      Object.assign(state, {
        isFetching: false,
        error: true
      })
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure
} = userSlice.actions
export default userSlice.reducer