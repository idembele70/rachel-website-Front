import { Add, Remove } from "@mui/icons-material"
import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import Newsletter from "components/tools/Newsletter"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { addProduct } from "redux/cartRedux"
import { publicRequest } from "requestMethods"
import { mobile } from "responsive"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: 10, flexDirection: "column" })};
`

const ImageContainer = styled.div`
  flex: 1;
  margin: 10px 25px;
  min-width: 530px;
  ${mobile({ minWidth: "auto", margin: 10 })};
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px 25px;
  ${mobile({ padding: 10 })};
`

const Title = styled.h1`
font- weight: 200;
`

const Description = styled.p`
  margin: 20px 0;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({ width: "100%" })};
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px
font-weight:200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(59, 75, 147, 0.8);
  background-color: ${(props) =>
    // eslint-disable-next-line react/prop-types
    props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover: {
    background-color: #f8f4f4;
  }
`

export default function ProductPage() {
  const { t } = useTranslation()

  const [product, setProduct] = useState({
    price: Number(),
    title: String(),
    description: String(),
    img: String(),
    sizes: [],
    colors: []
  })
  const [loading, setLoading] = useState(true)
  const id = useLocation().pathname.split("/")[2]
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(null)
  const [size, setSize] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    publicRequest
      .get(`/products/find/${id}`)
      .then((res) => {
        setProduct(res.data)
        setSize(res.data.sizes[0])
      })
      .finally(() => setLoading(false))
      .catch(console.error)
  }, [id])
  const { price, title, description, img, sizes, colors } = product
  const handleQuantity = (direction = String()) => {
    if (direction === "dec") {
      if (quantity > 1) setQuantity((qte) => qte - 1)
    } else setQuantity((qte) => qte + 1)
  }

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        price,
        quantity,
        color,
        size
      })
    )
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      {loading ? (
        "Loading..."
      ) : (
        <Wrapper>
          <ImageContainer>
            <Image src={`https://lh3.google.com/u/0/d/${img}`} alt={title} />
          </ImageContainer>
          <InfoContainer>
            <Title>{t(`products.name.${title}`)}</Title>
            <Description>
              {t(`products.description.${description}`)}
            </Description>
            <Price>
              {price}
              {t(`products.currency`)}
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>{t("products.filter.title.color")}</FilterTitle>
                {colors?.map((c) => (
                  <FilterColor onClick={() => setColor(c)} color={c} key={c} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>{t("products.filter.sizes.size")}</FilterTitle>
                <FilterSize
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  {sizes?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <Button onClick={handleAddToCart}>
                {t("products.addToCard")}{" "}
              </Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
      <Newsletter />
      <Footer />
    </Container>
  )
}
