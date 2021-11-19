import styled from "styled-components"
import Newsletter from "components/tools/Newsletter"
import Products from "components/home/products"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React from "react"
import { useTranslation } from "react-i18next"
import Announcement from "components/tools/Announcement"
import { mobile } from "responsive"

const ProductList = () => {
  const { t } = useTranslation()
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

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{t("products.name.dresses")}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>{t("products.filter.text.filterProducts")}</FilterText>
          <Select>
            <Option disabled selected>
              {t("products.filter.colors.color")}
            </Option>
            <Option>{t("products.filter.colors.white")}</Option>
            <Option>{t("products.filter.colors.black")}</Option>
            <Option>{t("products.filter.colors.red")}</Option>
            <Option>{t("products.filter.colors.blue")}</Option>
            <Option>{t("products.filter.colors.yellow")}</Option>
            <Option>{t("products.filter.colors.green")}</Option>
          </Select>
          <Select>
            <Option disabled selected>
              {t("products.filter.sizes.size")}
            </Option>
            <Option>{t("products.filter.sizes.xs")}</Option>
            <Option>{t("products.filter.sizes.s")}</Option>
            <Option>{t("products.filter.sizes.m")}</Option>
            <Option>{t("products.filter.sizes.l")}</Option>
            <Option>{t("products.filter.sizes.xl")}</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>{t("products.filter.text.sortProducts")}</FilterText>
          <Select>
            <Option disabled selected>
              {t("products.filter.sort.newest")}
            </Option>
            <Option>{t("products.filter.sort.priceAsc")}</Option>
            <Option>{t("products.filter.sort.priceDesc")}</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
