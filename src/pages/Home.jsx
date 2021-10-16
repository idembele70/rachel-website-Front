import Categories from "components/home/categories"
import Newsletter from "components/home/Newsletter"
import Products from "components/home/products"
import Slider from "components/home/Slider"
import React from "react"

function Home() {
  return (
    <div className="page">
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home
