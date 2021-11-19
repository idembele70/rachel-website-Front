import styled from "styled-components"
import React from "react"
import { useTranslation } from "react-i18next"
import { mobile } from "responsive"

const Login = () => {
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
  `
  const Link = styled.a`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
  `
  const { t } = useTranslation()
  return (
    <Container>
      <Wrapper>
        <Title>{t("signin.title")}</Title>
        <Form>
          <Input placeholder={t("username")} />
          <Input placeholder={t("password")} />
          <Button>{t("signin.login")}</Button>
          <Link href="/">{t("signin.forgotPassword")}</Link>
          <Link href="/">{t("signin.newUser")}</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
