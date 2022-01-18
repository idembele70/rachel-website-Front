/* eslint-disable react/prop-types */
// @ts-nocheck
import { Add, Remove, Delete } from "@mui/icons-material"
import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { mobile, tablet } from "responsive"
import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from "requestMethods"
import { useHistory } from "react-router-dom"
import {
  initializeCart,
  updateProduct,
  deleteProduct
} from "../redux/cartRedux"

const KEY = process.env.REACT_APP_STRIPE

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
  position: relative;
`
const DeleteSx = {
  position: "absolute",
  right: 0,
  top: 0
}
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
  height: 314px;
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

export default function Cart() {
  const {
    products,
    quantity: cartQte,
    total
  } = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const { t } = useTranslation()
  const onToken = (token) => setStripeToken(token)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total * 100
        })
        history.push("/success", { data: res.data })
      } catch (error) {
        console.error("error while posting", error)
      }
    }
    // eslint-disable-next-line no-unused-expressions
    stripeToken && total >= 1 && makeRequest()
  }, [stripeToken, total, history])
  const handleDelete = (data) => {
    dispatch(deleteProduct(data))
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>{t(`cart.title`)}</Title>
        <Top>
          <TopButton onClick={() => history.push("/")}>
            {t("cart.continueShop")}
          </TopButton>
          <TopTexts>
            <TopText>
              {t("cart.topTexts.bag")}({cartQte})
            </TopText>
            <TopText>{t("cart.topTexts.whislist")}(0)</TopText>
          </TopTexts>
          <TopButton type="filled">{t("cart.checkout")}</TopButton>
        </Top>
        <Bottom>
          <Info>
            {products?.map((product, idx) => {
              const { img, title, _id: id, color, size, qte, price } = product
              return (
                <Fragment key={id}>
                  {idx !== 0 && <Hr />}
                  <Product>
                    <Delete sx={DeleteSx} onClick={() => handleDelete({ id, totalPrice: price * qte })} />
                    <ProductDetail>
                      <Image src={img} alt={title} />
                      <Details>
                        <ProductName>
                          <b>{t("products.cart.product")}: </b>
                          {title}
                        </ProductName>
                        <ProductId>
                          <b>{t("products.cart.productId")}: </b>
                          {id}
                        </ProductId>
                        <ProductColor color={color} />
                        {(size?.length && size?.includes("") && (
                          <ProductSize>
                            <b>{t("products.cart.productSize")}: </b>
                            {size}
                          </ProductSize>
                        )) ||
                          ""}
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add
                          onClick={() => {
                            dispatch(updateProduct({ id, qte: 1, price }))
                          }}
                        />
                        <ProductAmount>{qte}</ProductAmount>
                        <Remove
                          onClick={() => {
                            if (qte > 1)
                              dispatch(updateProduct({ id, qte: -1, price }))
                          }}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        {price * qte}
                        {t("products.currency")}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                </Fragment>
              )
            })}
          </Info>
          <Summary>
            <SummaryTitle>{t("cart.title")}</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>
                {t("cart.orderSummary.subtotal")}
              </SummaryItemText>
              <SummaryItemPrice>
                {total}
                {t("products.currency")}
              </SummaryItemPrice>
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
              <SummaryItemPrice>
                {total}
                {t("products.currency")}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="rachelDembeleCouture"
              billingAddress
              shippingAddress
              description={`${t("cart.description")} ${total}${t(
                "products.currency"
              )}`}
              amount={total * 100}
              stripeKey={KEY}
              token={onToken}
            >
              <Button
                onClick={() => {
                  dispatch(initializeCart())
                }}
              >
                {t("cart.checkout")}
              </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}
