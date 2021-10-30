import React from "react"
import { styled } from "@mui/material"
import Navbar from "components/tools/Navbar"
import Footer from "components/tools/Footer"
import Newsletter from "components/tools/Newsletter"
import theme from "theme"
import { useTranslation } from "react-i18next"
import { Add, Remove } from "@mui/icons-material"

export default function ProductPage() {
  const { t } = useTranslation()

  const Container = styled("div")({})
  const Wrapper = styled("div")({
    padding: theme.spacing(10),
    display: "flex"
  })

  const ImageContainer = styled("div")({
    flex: 1
  })

  const Image = styled("img")({
    width: "100%",
    height: "90vh",
    objectFit: "cover"
  })

  const InfoContainer = styled("div")({
    flex: 1,
    padding: theme.spacing(0, 10)
  })

  const Title = styled("h1")({
    fontWeight: theme.typography.fontWeightRegular
  })

  const Description = styled("p")({
    margin: theme.spacing(4, 0)
  })

  const Price = styled("span")({
    fontWeight: theme.typography.fontWeightLight,
    fontSize: 40
  })
  const FilterContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: theme.spacing(6, 0)
  })
  const Filter = styled("div")({
    display: "flex",
    alignItems: "center"
  })
  const FilterTitle = styled("span")({
    fontSize: 20,
    fontWeight: theme.typography.fontWeightRegular
  })
  // eslint-disable-next-line react/jsx-props-no-spreading
  const FilterColor = styled(({ ...otherProps }) => <option {...otherProps} />)`
    width: 20px;
    height: 20;
    border-radius: 50%;
    background-color: ${(prop) => prop.color};
    margin: ${theme.spacing(0, 1)};
    cursor: pointer;
  `
  const FilterSize = styled("select")({
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1)
  })
  const FilterSizeOption = styled("option")({})
  const AddContainer = styled("div")({
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  })
  const AmountContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    fontWeight: 700
  })
  const Amount = styled("span")({
    width: 30,
    height: 30,
    borderRadius: 10,
    border: "1px solid teal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0, 1)
  })
  const Button = styled("button")({
    padding: theme.spacing(3),
    border: "2px solid teal",
    backgroundColor: theme.palette.common.white,
    cursor: "pointer",
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      backgroundColor: theme.palette.grey.A100
    }
  })

  return (
    <Container>
      <Navbar announcePosition="bottom" />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="salopette" />
        </ImageContainer>
        <InfoContainer>
          <Title>Salopette en jean</Title>
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

