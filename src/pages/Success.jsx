import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeCart } from "../redux/cartRedux"

const Success = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCart)
  }, [dispatch])
  return <div>Payment done SucessFull</div>
}

export default Success
