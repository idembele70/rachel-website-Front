import React from "react"
import styled from "styled-components"
import Navbar from "components/tools/Navbar"
import Footer from "components/tools/Footer"
import Newsletter from "components/tools/Newsletter"
font - weight
import { useTranslation } from "react-i18next"
import { Add, Remove } from "@mui/icons-material"

export default function ProductPage() {
  const { t } = useTranslation()

  const Container = styled.div`})
  const Wrapper = styled.div`
  padding: theme.spacing(10),
    display: "flex"
})

const ImageContainer = styled.div`
    flex: 1
  })

  const Image = styled.img({
    width: "100%",
    height: "90vh",
    objectFit: "cover"
  })

  const InfoContainer = styled.div`
flex: 1,
  padding: theme.spacing(0, 10)
  })

const Title = styled("h1")({
  font- weight: theme.typography.font - weightRegular
  })

const Description = styled("p")({
  margin: theme.spacing(4, 0)
})

const Price = styled("span")({
  font- weight: theme.typography.font - weightLight,
  font - size: 40
  })
const FilterContainer = styled.div`
  display: flex;
  justify- content: "space-between",
  width: "50%",
  margin: theme.spacing(6, 0)
})
const Filter = styled.div`
display: flex;
align - items: center;
})
const FilterTitle = styled("span")({
  font- size: 20,
  font - weight: theme.typography.font - weightRegular
  })
// eslint-disable-next-line react/jsx-props-no-spreading
const FilterColor = styled(({ ...otherProps }) => <option {...otherProps} />)`
    width: 20px;
    height: 20;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: ${theme.spacing(0, 1)};
    cursor: pointer;
  `
const FilterSize = styled("select")({
  marginLeft: 10px,
  padding: theme.5px
})
const FilterSizeOption = styled("option")({})
const AddContainer = styled.div`
  width: "50%",
  display: flex;
  align- items: center;
  justify - content: "space-between"
})
const AmountContainer = styled.div`
display: flex;
align - items: center;
font - weight: 700
  })
const Amount = styled("span")({
  width: 30,
  height: 30,
  borderRadius: 10,
  border: "1px solid teal",
  display: flex;
  align- items: center;
justify - content: center;
margin: theme.spacing(0, 1)
})
const Button = styled("button")({
  padding: 15px,
  border: "2px solid teal",
  background- color: theme.palette.common.white,
  cursor: "pointer",
  font - weight: theme.typography.font - weightMedium,
  "&:hover": {
    background- color: theme.palette.grey.A100
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

