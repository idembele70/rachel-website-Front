import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CategoryItem from "./CategoryItem"

function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("./database/categories.json")
      .then((res) => res.json())
      .then(setCategories)
      .catch((e) => console.error("Error while fetching categories", e))
  }, [])
  const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  `
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem itemInfo={category} key={category.id} />
      ))}
    </Container>
  )
}

export default Categories
