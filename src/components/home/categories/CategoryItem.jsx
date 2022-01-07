import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { mobile } from "responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  ${mobile({ height: "20vh" })};
`
const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`
const Button = styled.button`
  background-color: white;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`

const CategoryItem = ({ itemInfo }) => {
  const { t } = useTranslation()
  const { img, name, category } = itemInfo

  return (
    <Container>
      <Link to={`/products/${category}`}>
        <Image src={img} alt={t(`products.categories.${name} `)} />
        <Info>
          <Title>{t(`products.categories.${name}`).toUpperCase()}</Title>
          <Button>{t(`products.categories.button`)} </Button>
        </Info>
      </Link>
    </Container>
  )
}

CategoryItem.propTypes = {
  itemInfo: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
}
export default CategoryItem
