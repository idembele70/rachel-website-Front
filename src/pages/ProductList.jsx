import { styled } from "@mui/material"
import Newsletter from "components/home/Newsletter"
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
    fontWeight: 600,
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
      <Title>{t("productList.title.dresses")}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>{t("productList.filter.text.filterProducts")}</FilterText>
          <Select>
            <Option disabled selected>
              {t("productList.filter.selectOption.colors.color")}
            </Option>
            <Option>{t("productList.filter.selectOption.colors.white")}</Option>
            <Option>{t("productList.filter.selectOption.colors.black")}</Option>
            <Option>{t("productList.filter.selectOption.colors.red")}</Option>
            <Option>{t("productList.filter.selectOption.colors.blue")}</Option>
            <Option>
              {t("productList.filter.selectOption.colors.yellow")}
            </Option>
            <Option>{t("productList.filter.selectOption.colors.green")}</Option>
          </Select>
          <Select>
            <Option disabled selected>
              {t("productList.filter.selectOption.sizes.size")}
            </Option>
            <Option>{t("productList.filter.selectOption.sizes.xs")}</Option>
            <Option>{t("productList.filter.selectOption.sizes.s")}</Option>
            <Option>{t("productList.filter.selectOption.sizes.m")}</Option>
            <Option>{t("productList.filter.selectOption.sizes.l")}</Option>
            <Option>{t("productList.filter.selectOption.sizes.xl")}</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>{t("productList.filter.text.sortProducts")}</FilterText>
          <Select>
            <Option disabled selected>
              {t("productList.filter.selectOption.sort.newest")}
            </Option>
            <Option>
              {t("productList.filter.selectOption.sort.priceAsc")}
            </Option>
            <Option>
              {t("productList.filter.selectOption.sort.priceDesc")}
            </Option>
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
