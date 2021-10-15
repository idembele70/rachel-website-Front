import Newsletter from "components/home/Newsletter"
import Categories from "components/home/categories"
import Navbar from "components/tools/Navbar"
import Products from "components/home/products"
import Slider from "components/home/Slider"
import React from "react"

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home
