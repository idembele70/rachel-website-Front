import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Product(props) {
  const Container = styled.div`
    align-items: center;
    background-color: #f5fbfd;
    display: flex;
    flex: 1;
    height: 350px;
    justify-content: center;
    margin: 5px;
    min-width: 280px;
    position: relative;
  `
  const Circle = styled.div`
    background-color: white;
    border-radius: 50%;
    height: 200px;
    position: absolute;
    width: 200px;
  `
  const Image = styled.img`
    height: 75%;
    max-width: 90%;
    z-index: 1;
    object-fit: cover;
  `
  const Info = styled.div`
    opacity: 0;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  `
  const Icon = styled.div`
    background-color: white;
    borderradius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `
  const { t } = useTranslation()
  const {
    product: { img, _id: id, title }
  } = props
  return (
    <Container>
      <Circle />
      <Image
        src={`https://lh3.google.com/u/0/d/${img}`}
        alt={t(`products.name.${title}`)}
      />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={`/product/${id}`}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired
}
