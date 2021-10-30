import React from "react"
import { styled } from "@mui/material"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import theme from "theme"

const CategoryItem = ({ itemInfo }) => {
  const { t } = useTranslation()
  const { img, name } = itemInfo
  const Container = styled("div")({
    flex: 1,
    height: "70vh",
    margin: theme.spacing(1),
    position: "relative"
  })
  const Image = styled("img")({
    height: "100%",
    objectFit: "cover",
    width: "100%"
  })
  const Info = styled("div")({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  })
  const Title = styled("h1")({
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4)
  })
  const Button = styled("button")({
    backgroundColor: theme.palette.common.white,
    border: "none",
    color: "gray",
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2)
  })
  return (
    <Container>
      <Image src={img} alt={t(`products.categories.${name}`)} />
      <Info>
        <Title>{t(`products.categories.${name}`).toUpperCase()}</Title>
        <Button>{t(`products.categories.button`)} </Button>
      </Info>
    </Container>
  )
}

CategoryItem.propTypes = {
  itemInfo: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}
export default CategoryItem
