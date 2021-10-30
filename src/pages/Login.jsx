import { styled } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import theme from "theme"

const Login = () => {
  const Container = styled("div")`
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
  const Wrapper = styled("div")({
    width: "25%",
    padding: theme.spacing(4),
    backgroundColor: theme.palette.common.white
  })
  const Title = styled("h1")({
    fontSize: 24,
    fontWeight: 300
  })
  const Form = styled("form")({
    display: "flex",
    flexDirection: "column"
  })
  const Input = styled("input")({
    flex: 1,
    minWidth: "40%",
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2)
  })
  const Button = styled("button")({
    width: "40%",
    border: "none",
    padding: theme.spacing(3, 4),
    backgroundColor: "teal",
    color: theme.palette.common.white,
    cursor: "pointer",
    marginBottom: theme.spacing(2)
  })
  const Link = styled("a")({
    fontsize: 12,
    margin: theme.spacing(1, 0),
    textDecoration: "underline",
    cursor: "pointer"
  })
  const { t } = useTranslation()
  return (
    <Container>
      {" "}
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
