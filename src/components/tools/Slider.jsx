import React from "react"
import { styled } from "@mui/material"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import PropTypes from "prop-types"

const Container = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  marginTop: 98,
  backgroundColor: "coral",
  position: "relative"
})
const Arrow = styled("div")({
  width: 50,
  height: 50,
  backgroundColor: "#fff7f7",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: (props) => (props.direction === "left" && 10) || "",
  margin: "auto"
})
Arrow.propTypes = {
  direction: PropTypes.string.isRequired
}

function Slider() {
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
