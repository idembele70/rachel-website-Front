import React from "react"
import { styled } from "@mui/material"
import Navbar from "components/tools/Navbar"
import Footer from "components/tools/Footer"
import { useTranslation } from "react-i18next"
import theme from "theme"
import { Add, Remove } from "@mui/icons-material"

export default function Cart() {
  const { spacing, typography, palette } = theme
  const Container = styled("div")({})
  const Wrapper = styled("div")({
    padding: spacing(4)
  })
  const Title = styled("h1")({
    fontWeight: 300,
    textAlign: "center"
  })
  const Top = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing(4)
  })
  const TopButton = styled(({ ...otherProps }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="submit" {...otherProps} />
  ))`
    padding: ${spacing(2)};
    font-weight: ${typography.fontWeightBold};
    cursor: pointer;
    border: ${(prop) => prop.type === "filled" && "none"};
    background-color: ${(prop) =>
      prop.type === "filled" ? palette.common.black : "transparent"};
    color: ${(prop) => prop.type === "filled" && "white"};
  `
  const TopTexts = styled("div")({})
  const TopText = styled("span")({
    textDecoration: "underline",
    cursor: "pointer",
    margin: spacing(0, 2)
  })
  const Bottom = styled("div")({
    display: "flex",
    justifyContent: "space-between"
  })
  const Info = styled("div")({
    flex: 3
  })
  const Product = styled("div")({
    display: "flex",
    justifyContent: "space-between"
  })
  const ProductDetail = styled("div")({
    flex: 2,
    display: "flex"
  })
  const Image = styled("img")({
    width: 200
  })
  const Details = styled("div")({
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  })
  const ProductName = styled("span")({})
  const ProductId = styled("span")({})
  // eslint-disable-next-line react/jsx-props-no-spreading
  const ProductColor = styled(({ ...otherProps }) => <div {...otherProps} />)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(prop) => prop.color};
  `
  const ProductSize = styled("span")({})
  const PriceDetail = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  })
  const ProductAmountContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBotto: spacing()
  })
  const ProductAmount = styled("div")({
    fontSize: 24,
    margin: spacing(1)
  })
  const ProductPrice = styled("div")({
    fontSize: 30,
    fontWeight: typography.fontWeightRegular
  })
  const Summary = styled("div")({
    flex: 1,
    border: "0.5px solid ligthgray",
    borderRadius: 10,
    padding: spacing(4),
    height: "50vh"
  })
  const SummaryTitle = styled("h1")({
    fontWeight: typography.fontWeightRegular
  })

  // eslint-disable-next-line react/jsx-props-no-spreading
  const SummaryItem = styled(({ ...otherProps }) => <div {...otherProps} />)`
    margin: ${spacing(6, 0)};
    display: flex;
    justify-content: space-between;
    font-weight: ${(prop) =>
      prop.type === "total" && typography.fontWeightMedium};
    fontsize: ${(prop) => prop.type === "total" && 24};
  `
  const SummaryItemText = styled("span")({})
  const SummaryItemPrice = styled("span")({})
  const Button = styled("button")({
    width: "100%",
    padding: spacing(2),
    backgroundColor: palette.common.black,
    color: palette.common.white,
    fontWeight: typography.fontWeightBold
  })

  const { t } = useTranslation()
  return (
    <Container>
      <Navbar announcePosition="bottom" />
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
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
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

[Cart] Design done