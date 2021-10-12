import Categories from "components/tools/Cateogries"
import Navbar from "components/tools/Navbar"
import Slider from "components/tools/Slider"
import React from "react"

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
