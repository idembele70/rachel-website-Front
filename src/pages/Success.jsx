import Announcement from "components/tools/Announcement"
import Footer from "components/tools/Footer"
import Navbar from "components/tools/Navbar"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { initializeCart } from "../redux/cartRedux"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const OrderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 0 16px;
`
const Left = styled.div`
  flex-grow: 1;
  padding-right:10px;
`
const LeftTitle = styled.h2``
const ProductContainer = styled.div`
  margin: 18px 0;
`
const  ProductRow = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
border-bottom: 1px solid grey;
`
const RowItem = styled.h3`
  
`;
const Right = styled.div`
  flex-grow: 0.66;
  margin-left: 10px;
  background: red;
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
          </ProductContainer>
        </Left>
        <Right />
      </OrderContainer>
      <Footer />
    </Container>
  )
}

export default Success
