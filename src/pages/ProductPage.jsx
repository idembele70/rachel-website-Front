import React from "react"
import styled from "styled-components"
import Navbar from "components/tools/Navbar"
import Footer from "components/tools/Footer"
import Newsletter from "components/tools/Newsletter"
import { useTranslation } from "react-i18next"
import { Add, Remove } from "@mui/icons-material"
import Announcement from "components/tools/Announcement"
import { mobile } from "responsive"

export default function ProductPage() {
  const { t } = useTranslation()

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

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="salopette" />
        </ImageContainer>
        <InfoContainer>
          <Title>{t("products.name.overalls")}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Description>
          <Price>20€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>{t("products.filter.title.color")}</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>{t("products.filter.sizes.size")}</FilterTitle>
              <FilterSize>
                <FilterSizeOption>
                  {t("products.filter.sizes.xs")}
                </FilterSizeOption>
                <FilterSizeOption>
                  {t("products.filter.sizes.s")}
                </FilterSizeOption>
                <FilterSizeOption>
                  {t("products.filter.sizes.m")}
                </FilterSizeOption>
                <FilterSizeOption>
                  {t("products.filter.sizes.l")}
                </FilterSizeOption>
                <FilterSizeOption>
                  {t("products.filter.sizes.xl")}
                </FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>{t("products.addToCard")} </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}
