import Categories from "components/home/categories"
import Products from "components/home/products"
import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import Newsletter from "components/tools/Newsletter"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function Home() {
  const history = useHistory()
  useEffect(() => {
    if (history.location.state?.redirect) history.push("/cart")
  }, [history])

  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Slider /> */}
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
