import PropTypes from "prop-types"
import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <Route
      {...rest}
      render={(props) =>
        Object.keys(currentUser).length ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  )
}
PrivateRoute.propTypes = {
  component: PropTypes.instanceOf(Object)
}
PrivateRoute.defaultProps = {
  component: {}
}

export default PrivateRoute
