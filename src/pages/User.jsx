import { useSelector } from "react-redux"
import React from "react"
import Sidebar from "components/user/Sidebar"
import styled from "styled-components"
import Main from "components/user/Main"

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`
const User = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  )
}

export default User
