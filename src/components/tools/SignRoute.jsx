import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

const SignRoute = ({ component: Component, path, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user)
  const isDisconnected = Object.keys(currentUser).length === 0
  const {
    location: { state }
  } = useHistory()
  return (
    <Route
      {...rest}
      render={(props) => {
        if ((path === "/register" || path === "/login") && isDisconnected)
          return <Component {...props} />{/* 
        if (state?.redirect && !isDisconnected)
          return <Redirect to={{ pathname: "/cart" }} /> */}
        return <Redirect to={{ pathname: "/" }} />
      }}
    />
  )
}

SignRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string.isRequired
}

export default SignRoute
