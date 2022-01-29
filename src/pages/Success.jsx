import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { mobile, smallMobile, tablet } from "responsive"
import styled from "styled-components"
import { initializeCart } from "../redux/cartRedux"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
`
const OrderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px;
  gap: 20px;
  ${smallMobile({ margin: 8, gap: "20px 0" })};
`
const Left = styled.div`
  flex-grow: 1;
`
const LeftTitle = styled.h2``
const ProductContainer = styled.div`
  margin: 18px 0;
`
const ProductRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2dcdc;
`
const RowItem = styled.h3`
  padding: 5px;
  font-weight: ${(props) =>
    // @ts-ignore
    props.isName ? 100 : 600};
`

const AddressContainer = styled.div``
const AddressRow = styled.h3`
  font-style: italic;
  font-weight: 300;
  &:first-of-type {
    margin-top: 18px;
  }
`

const Right = styled.div`
  flex-grow: 0.66;
  box-shadow: 2px 2px #c0bebe;
  background-color: #f6f6f6;
  max-width: 350px;
  max-height: 220px;
  padding: 20px;
  ${smallMobile({
    flexGrow: 1,
    /* width: "calc(100% - 10px)", */
    padding: 5
  })}
`
const RightTitle = styled.h3`
  color: green;
  margin-bottom: 18px;
`
const RightList = styled.ul`
  ${smallMobile({ padding: 0, listStyleType: "none" })}
`
const RightListItem = styled.li``
const ItemTitle = styled.h3`
  display: inline;
  font-weight: ${(props) => (props.isBold ? 600 : "normal")};
  word-break: break-word;
`

const Success = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeCart)
  }, [dispatch])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <OrderContainer>
        <Left>
          <LeftTitle>Order details</LeftTitle>
          <ProductContainer>
            <ProductRow>
              <RowItem>PRODUCT</RowItem>
              <RowItem>TOTAL</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem isName>e-phonez x5</RowItem>
              <RowItem>2000€</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem isName>2021 Watch x1</RowItem>
              <RowItem>200€</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem>Subtotal</RowItem>
              <RowItem>2200€</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem>Payment Method</RowItem>
              <RowItem>Credit Card</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem>Shipping Fee</RowItem>
              <RowItem>100€</RowItem>
            </ProductRow>
            <ProductRow>
              <RowItem>Total</RowItem>
              <RowItem>2300€</RowItem>
            </ProductRow>
          </ProductContainer>
          <AddressContainer>
            <LeftTitle>Billing Address</LeftTitle>
            <AddressRow>darrel wilson</AddressRow>
            <AddressRow>27367 avalon</AddressRow>
            <AddressRow>chatsworth, CA 91311</AddressRow>
            <AddressRow>tassadar03x@gmail.com</AddressRow>
          </AddressContainer>
        </Left>
        <Right>
          <RightTitle>Thank you. Your Order has been received.</RightTitle>
          <RightList>
            <RightListItem>
              <ItemTitle>Order Number:&nbsp;</ItemTitle>
              <ItemTitle isBold>312</ItemTitle>
            </RightListItem>
            <RightListItem>
              <ItemTitle>Date:&nbsp;</ItemTitle>
              <ItemTitle isBold>March 27, 2020</ItemTitle>
            </RightListItem>
            <RightListItem>
              <ItemTitle>email:&nbsp;</ItemTitle>
              <ItemTitle isBold>tassadar03x@gmail.com</ItemTitle>
            </RightListItem>
            <RightListItem>
              <ItemTitle>Total:&nbsp;</ItemTitle>
              <ItemTitle isBold>2200€</ItemTitle>
            </RightListItem>
          </RightList>
        </Right>
      </OrderContainer>
      <Footer />
    </Container>
  )
}

export default Success
