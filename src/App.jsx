import Cart from "pages/Cart"
import Home from "pages/Home"
import Login from "pages/Login"
import ProductList from "pages/ProductList"
import ProductPage from "pages/ProductPage"
import Register from "pages/Register"
import Success from "pages/Success"
import User from "pages/User"
import React from "react"
import { useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import ScrollToTop from "./components/tools/ScrollTopTop"

function App() {
  // @ts-ignore
  const { currentUser: user } = useSelector((state) => state.user)
  return (
    <Router>
      <>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/products/:category" exact>
            <ProductList />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage />
          </Route>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register" exact>
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/success" component={Success} exact />
          <Route path="/user/index" component={User} exact />
        </Switch>
      </>
    </Router>
  )
}
export default App
