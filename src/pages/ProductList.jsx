import { styled } from "@mui/material"
import Newsletter from "components/tools/Newsletter"
import Products from "components/home/products"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React from "react"
import { useTranslation } from "react-i18next"
import theme from "theme"

const ProductList = () => {
  const { t } = useTranslation()
  const Container = styled("div")({})
  const Title = styled("h1")({
    margin: theme.spacing(4)
  })
  const FilterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between"
  })
  const Filter = styled("div")({
    margin: theme.spacing(4)
  })
  const FilterText = styled("span")({
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(4)
  })
  const Select = styled("select")({
    padding: theme.spacing(2),
    marginRight: theme.spacing(4)
  })
  const Option = styled("option")({})

  return (
    <Container>
      <Navbar announcePosition="bottom" />
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
