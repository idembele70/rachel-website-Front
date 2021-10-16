import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import ProductList from "pages/ProductList"
import React from "react"
import Home from "pages/Home"
import "index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/productList">
            <ProductList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
export default App
