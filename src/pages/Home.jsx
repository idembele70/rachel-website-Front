import Categories from "components/home/categories"
import Newsletter from "components/home/Newsletter"
import Products from "components/home/products"
import Slider from "components/home/Slider"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React from "react"

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
