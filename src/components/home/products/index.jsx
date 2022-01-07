import styled from "styled-components"
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import Product from "./Product"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1440px;
  margin: auto;
`

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  function sortProducts({ value = "newest", arr = [] }) {
    switch (value) {
      case "asc":
        return arr.sort((a, b) => a.price - b.price)
      case "desc":
        return arr.sort((a, b) => b.price - a.price)
      default:
        return arr.sort(
          (a, b) =>
            // @ts-ignore
            new Date(b.createdAt) - new Date(a.createdAt)
        )
    }
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        )
        setProducts(sortProducts({ arr: data }))
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
  }, [category])

  useEffect(() => {
    if ((category && filters.colors !== "none") || filters.sizes !== "size") {
      const filtered = products.filter((item) =>
        Object.entries(filters).find(([key, value]) =>
          item[key].includes(value)
        )
      )
      setFilteredProducts(sortProducts({ value: sort, arr: filtered }))
    } else setFilteredProducts(sortProducts({ value: sort, arr: products }))
  }, [category, products, filters, sort])

  return (
    <Container>
      {category
        ? filteredProducts.map((filteredProduct) => (
          <Product product={filteredProduct} key={filteredProduct.title} />
        ))
        : products
          .slice(0, 8)
          .map((product) => (
            <Product product={product} key={product.title} />
          ))}
    </Container>
  )
}
Products.propTypes = {
  category: PropTypes.string,
  filters: PropTypes.instanceOf(Object),
  sort: PropTypes.string
}
Products.defaultProps = {
  category: null,
  filters: {},
  sort: String()
}
export default Products

