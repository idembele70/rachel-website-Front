import React from "react"
import { styled } from "@mui/material"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

const Container = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  marginTop: 98,
  backgroundColor: "coral",
  position: "relative"
})
function Slider() {
  const Arrow = styled("div")`
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
    left: ${({
    // @ts-ignore
    direction
  }) => direction === "left" && "10px"};
    right: ${({
    // @ts-ignore
    direction
  }) => direction === "right" && "10px"};
    margin: auto;
  `
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

