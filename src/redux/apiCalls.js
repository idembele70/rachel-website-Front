import { publicRequest } from "requestMethods"
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess
} from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
export const logout = async (dispatch) => {
  dispatch(logoutStart())
  try {
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutFailure())
  }
}
export const register = async (dispatch, user) => {
  dispatch(signUpStart())
  try {
    await publicRequest.post("/auth/register", user)
    dispatch(signUpSuccess())
  } catch (error) {
    dispatch(signUpFailure)
  }
}
