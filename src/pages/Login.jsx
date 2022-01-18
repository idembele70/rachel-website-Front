import Navbar from "components/tools/Navbar"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { login } from "redux/apiCalls"
import { mobile } from "responsive"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile("height: calc(100vh - 50px)")}
`
const Wrapper = styled.div`
  width: 75%;
  max-width: 455px;
  padding: 20px;
  background-color: white;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  width: 80%;
  max-width: 320px;
  margin: 10px 0;
  padding: 10px;
`
const Button = styled.button`
  width: 110px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: twhite;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
`

const LinkStyle = {
  fontSize: "12px",
  margin: "5px 0",
  textDecoration: "underline",
  cursor: "pointer"
}

const Login = () => {
  const { t } = useTranslation()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  // @ts-ignore
  const { isFetching, error: stateError } = useSelector((state) => state.user)
  const handleLogin = (e) => {
    e.preventDefault()
    if (stateError) setError(t("signin.errorMessage"))
    login(dispatch, { username, password })
  }

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>{t("signin.title")}</Title>
          <Form onSubmit={handleLogin}>
            <Input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t("username")}
            />
            <Input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("password")}
            />
            <Button type="submit" disabled={isFetching}>
              {t("signin.login")}
            </Button>
            {error && <Error>{error} </Error>}
            {/*  <Link href="/">{t("signin.forgotPassword")}</Link> */}
            <Link to="/register" style={LinkStyle}>
              {t("signin.newUser")}
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  )
}

export default Login
