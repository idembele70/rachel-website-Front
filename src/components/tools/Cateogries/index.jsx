import React, { useEffect, useState } from "react"
import { styled } from "@mui/material"
import theme from "theme"
import CategoryItem from "./CategoryItem"

function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("./database/categories.json")
      .then((res) => res.json())
      .then(setCategories)
      .catch((e) => console.error("Error while fetching categories", e))
  }, [])
  const Container = styled("div")({
    display: "flex",
    padding: theme.spacing(4),
    justifyContent: "space-between"
  })
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem itemInfo={category} />
      ))}
    </Container>
  )
}

export default Categories
