import React from "react"
import { styled } from "@mui/material"
import PropTypes from "prop-types"
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material"
import theme from "theme"

export default function Product({ img }) {
  const Container = styled("div")({
    alignItems: "center",
    backgroundColor: theme.palette.grey[100],
    display: "flex",
    flex: 1,
    height: 350,
    justifyContent: "center",
    margin: theme.spacing(1),
    minWidth: 280,
    position: "relative"
  })
  const Circle = styled("div")({
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    height: 200,
    position: "absolute",
    width: 200
  })
  const Image = styled("img")({
    height: "75%",
    zIndex: 1
  })
  const Info = styled("div")({
    opacity: 0,
    alignItems: "center",
    backgroundColor: theme.palette.action.disabled,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
    transition: "all .5s ease",
    cursor: "pointer",
    "&:hover": {
      opacity: 1
    }
  })
  const Icon = styled("div")({
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    margin: theme.spacing(2),
    transition: "all .5s ease",
    "&:hover": {
      backgroundColor: theme.palette.grey[600],
      transform: "scale(1.1)"
    }
  })
  return (
    <Container>
      <Circle />
      <Image src={img} alt="alt " />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

Product.propTypes = {
  img: PropTypes.string.isRequired
}
