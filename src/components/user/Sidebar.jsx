import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
`

export default function sidebar() {
  return <Container>SIDEBAR</Container>
}

