import styled from "styled-components"
import Newsletter from "components/tools/Newsletter"
import Products from "components/home/products"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import Announcement from "components/tools/Announcement"
import { mobile } from "responsive"
import { useLocation } from "react-router-dom"

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: 0 })};
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })};
`
const Option = styled.option``

const ProductList = () => {
  const { t } = useTranslation()

  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filters, setfilters] = useState({ colors: "none", sizes: "size" })

  const handleFilters = (e) => {
    const { name, value } = e.target
    setfilters({ ...filters, [name]: value })
  }

  const [sort, setSort] = useState("newest")
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{t(`products.filter.category.${category}`)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>{t("products.filter.text.filterProducts")}</FilterText>
          <Select name="color" value={filters.colors} onChange={handleFilters}>
            <Option value="none">{t("products.filter.colors.color")}</Option>
            <Option value="white">{t("products.filter.colors.white")}</Option>
            <Option value="black">{t("products.filter.colors.black")}</Option>
            <Option value="red">{t("products.filter.colors.red")}</Option>
            <Option value="blue">{t("products.filter.colors.blue")}</Option>
            <Option value="yellow">{t("products.filter.colors.yellow")}</Option>
            <Option value="green">{t("products.filter.colors.green")}</Option>
          </Select>
          <Select name="size" value={filters.sizes} onChange={handleFilters}>
            <Option value="size">{t("products.filter.sizes.size")}</Option>
            <Option value="XS">{t("products.filter.sizes.xs")}</Option>
            <Option value="S">{t("products.filter.sizes.s")}</Option>
            <Option value="M">{t("products.filter.sizes.m")}</Option>
            <Option value="L">{t("products.filter.sizes.l")}</Option>
            <Option value="XL">{t("products.filter.sizes.xl")}</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>{t("products.filter.text.sortProducts")}</FilterText>
          <Select
            name="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <Option value="newest">{t("products.filter.sort.newest")}</Option>
            <Option value="asc">{t("products.filter.sort.priceAsc")}</Option>
            <Option value="desc">{t("products.filter.sort.priceDesc")}</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
