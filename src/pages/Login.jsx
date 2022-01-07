import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { login } from "redux/apiCalls"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`

const Login = () => {
  const { t } = useTranslation()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  // @ts-ignore
  const { isFetching, error } = useSelector((state) => state.user)
  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>{t("signin.title")}</Title>
        <Form>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t("username")}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password")}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            {t("signin.login")}
          </Button>
          {error && <Error>{t("signin.errorMessage")} </Error>}
          <Link href="/">{t("signin.forgotPassword")}</Link>
          <Link href="/">{t("signin.newUser")}</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
