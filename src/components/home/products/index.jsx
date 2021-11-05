import styled from "styled-components"
import React, { useEffect, useState } from "react"
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

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
  `
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product img={img} key={id} />
      ))}
    </Container>
  )
}

export default Products
