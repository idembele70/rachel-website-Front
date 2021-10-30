import { styled } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import theme from "theme"

function Register() {
  const Container = styled("div")`
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
  const Wrapper = styled("div")({
    width: "40%",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.common.white
  })
  const Title = styled("h1")({
    fontSize: 24,
    fontWeight: 300
  })
  const Form = styled("form")({
    display: "flex",
    flexWrap: "wrap"
  })
  const Input = styled("input")({
    flex: 1,
    minWidth: "40%",
    margin: theme.spacing(4, 2, 0, 0),
    padding: theme.spacing(2)
  })
  const Agreement = styled("span")({
    fontSize: 12,
    margin: theme.spacing(4, 0)
  })
  const Button = styled("button")({
    width: "40%",
    border: "none",
    padding: theme.spacing(3, 4),
    backgroundColor: "teal",
    color: theme.palette.common.white,
    cursor: "pointer"
  })
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
            <b>{t("signup.privacyPolicy")}</b>
          </Agreement>
          <Button>{t("signup.create")}</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
