/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
font - weight

const Container = styled.div`
  width: "100%",
  height: "100vh",
  display: flex;
  marginTop: 98,
  position: relative;,
  overflow: "hidden"
})

const Wrapper = styled(({ ...otherProps }) => <div {...otherProps} />)`
height: 100 %;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideindex * -100}vw);
`

const Arrow = styled(({ ...otherProps }) => <div {...otherProps} />)`
width: 50px;
height: 50px;
background - color: #fff7f7;
border - radius: 50 %;
display: flex;
align - items: center;
justify - content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${ (props) => props.direction === "left" && "10px" };
right: ${ (props) => props.direction === "right" && "10px" };
margin: auto;
cursor: pointer;
opacity: 0.5;
z - index: 20;
`
const Slide = styled(({ ...otherProps }) => <div {...otherProps} />)`
align - items: center;
display: flex;
height: 100vh;
width: 100vw;
background - color: #${ (props) => props.bg };
`

const ImgContainer = styled.div`
flex: 1,
  height: "100%"
})
const Image = styled.img({
  height: "80%"
})
const InfoContainer = styled.div`
  flex: 1,
  padding: theme.spacing(10)
})
const Title = styled("h1")({
  font- size: 70
})
const Description = styled("p")({
  margin: theme.spacing(10, 0),
  font- size: 20,
  font - weight: theme.typography.font - weightMedium,
  letterSpacing: 3
})
const Button = styled("button")({
  padding: 10px,
  font- size: 20,
  background - color: "transparent",
  cursor: "pointer"
})
function Slider() {
  const [sliderItems, setsliderItems] = useState([])
  useEffect(() => {
    fetch("database/sliderItems.json")
      .then((res) => res.json())
      .then(setsliderItems)
      .catch((e) => console.error("Error while fetching items", e))
  }, [])
  const { t } = useTranslation()
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
    else setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideindex={slideIndex}>
        {sliderItems.length &&
          sliderItems.map((item) => (
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt="girl" />
              </ImgContainer>
              <InfoContainer>
                <Title>{t(`slider.info.${ item.name }.title`)} </Title>
                <Description>
                  {t(`slider.info.${ item.name }.description`)}
                </Description>
                <Button>{t("slider.info.button")}</Button>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
