import { styled } from "@mui/material"
import React, { useEffect, useState } from "react"
import theme from "theme"
import Product from "./Product"

const Products = () => {
  const [popularProducts, setPopularProducts] = useState([])
  useEffect(() => {
    fetch("database/popularProducts.json")
      .then((res) => res.json())
      .then(setPopularProducts)
      .catch((e) =>
        console.error("Error while fetching products from database", e)
      )
  }, [])

  const Container = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: theme.spacing(4)
  })
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product img={img} key={id} />
      ))}
    </Container>
  )
}

export default Products
