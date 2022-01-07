import styled from "styled-components"
import React from "react"
import { useTranslation } from "react-i18next"
import { mobile } from "responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  width: 100%;
  margin: 20px 0;
`
const Button = styled.button`
  width: 115px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

function Register() {
  const { t } = useTranslation()
  return (
    <Container>
      <Wrapper>
        <Title>{t("signup.title")}</Title>
        <Form>
          <Input placeholder={t("name")} />
          <Input placeholder={t("lastname")} />
          <Input placeholder={t("username")} />
          <Input placeholder={t("email")} />
          <Input placeholder={t("password")} />
          <Input placeholder={t("confirmPassword")} />
          <Agreement>
            {t("signup.agreement")}
            <b> {t("signup.privacyPolicy")}.</b>
          </Agreement>
          <Button>{t("signup.create")}</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
