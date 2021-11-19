/* eslint-disable react/prop-types */
// @ts-nocheck
import { Add, Remove } from "@mui/icons-material"
import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React from "react"
import { useTranslation } from "react-i18next"
import { mobile, tablet } from "responsive"
import styled from "styled-components"

export default function Cart() {
  const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
  `
  const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: 10 })};
  `
  const Title = styled.h1`
    font-weight: 300;
    text-align: center;
  `
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${tablet({ padding: "20px 10px" })}
    ${mobile({})}
  `
  const TopButton = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    ${mobile({ textAlign: "center" })};
  `
  const TopTexts = styled.div`
    ${mobile({ display: "none" })};
  `
  const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    ${tablet({ margin: "0 5px" })};
  `
  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ flexDirection: "column", alignItems: "center" })};
  `
  const Info = styled.div`
    flex: 3;
  `
  const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${tablet({ width: "90vw" })};
    ${mobile({ flexDirection: "column" })};
  `
  const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `
  const Image = styled.img`
    width: 200px;
    min-height: 200px;
  `
  const Details = styled.div`
    padding: 20px;
    max-width: 311px;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `
  const ProductName = styled.span``
  const ProductId = styled.span``
  const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `
  const ProductSize = styled.span``
  const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `
  const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })};
  `
  const ProductPrice = styled.div`
    ${mobile({ marginBottom: 20 })};
    font-size: 30px;
    font-weight: 200;
  `
  const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
  `
  const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    min-width: 275px;
    max-width: 365px;
    ${tablet({ width: "100%" })};
    ${mobile({ padding: 5, minWidth: "95vw" })};
  `
  const SummaryTitle = styled.h1`
    font-weight: 200;
    ${mobile({ textAlign: "center" })};
  `

  const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 500};
  };
  font-size: ${(props) => props.type === "total" && "24px"};
  `
  const SummaryItemText = styled.span``
  const SummaryItemPrice = styled.span``
  const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
  `

  const { t } = useTranslation()
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>{t("cart.title")}</Title>
        <Top>
          <TopButton>{t("cart.continueShop")}</TopButton>
          <TopTexts>
            <TopText>{t("cart.topTexts.bag")}(2)</TopText>
            <TopText>{t("cart.topTexts.whislist")}(0)</TopText>
          </TopTexts>
          <TopButton type="filled">{t("cart.checkout")}</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center;top&resize=480%3A%2A"
                  alt="shoes"
                />
                <Details>
                  <ProductName>
                    <b>{t("products.cart.product")}: </b>
                    {t("products.name.nikeRuning")}
                  </ProductName>
                  <ProductId>
                    <b>{t("products.cart.productId")}: </b>
                    bfc4a2a1-975f-4218-a857-baef61cbd654
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>{t("products.cart.productSize")}: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>20{t("products.currency")}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt="shoes"
                />
                <Details>
                  <ProductName>
                    <b>{t("products.cart.product")}: </b>
                    {t("products.name.hakuraTees")}
                  </ProductName>
                  <ProductId>
                    <b>{t("products.cart.productId")}: </b>
                    f02d1797-ddc1-4443-82b8-81f858448944
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>{t("products.cart.productSize")}: </b>
                    {t("products.filter.sizes.m")}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>20{t("products.currency")}</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>{t("cart.title")}</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>
                {t("cart.orderSummary.subtotal")}
              </SummaryItemText>
              <SummaryItemPrice>80{t("products.currency")}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                {t("cart.orderSummary.shippingPrice")}
              </SummaryItemText>
              <SummaryItemPrice>5.90{t("products.currency")}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                {t("cart.orderSummary.shippingDiscount")}
              </SummaryItemText>
              <SummaryItemPrice>-5.90{t("products.currency")}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>{t("cart.orderSummary.total")}</SummaryItemText>
              <SummaryItemPrice>80{t("products.currency")}</SummaryItemPrice>
            </SummaryItem>
            <Button>{t("cart.checkout")}</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
