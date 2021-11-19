// @ts-nocheck
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { tablet } from "responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  position: relative;
  overflow: hidden;
  ${tablet({ display: "none" })};
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => (props.slideIndex * -100) / 3}%);
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 20;
`
const Slide = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  max-width: 1440px;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
  height: 68%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 200px;
`
const Title = styled.h1`
  font-size: 50px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20;
  font-weight: 500;
  letter-spacing: 3px;
  width: 85%;
  max-width: 400px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
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
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.length &&
          sliderItems.map((item) => (
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt="girl" />
              </ImgContainer>
              <InfoContainer>
                <Title>{t(`slider.info.${item.name}.title`)} </Title>
                <Description>
                  {t(`slider.info.${item.name}.description`)}
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
