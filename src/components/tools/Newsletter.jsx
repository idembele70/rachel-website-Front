import React from "react"
import { styled } from "@mui/material"
import { Send } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import theme from "theme"

function Newsletter() {
  const Container = styled("div")({
    height: "60vh",
    backgroundColor: theme.palette.grey.A100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  })
  const Title = styled("h1")({
    fontSize: 70,
    marginBottom: theme.spacing(4)
  })
  const Description = styled("div")({
    fontSize: 24,
    fontWeight: 300,
    marginBottom: theme.spacing(4)
  })
  const InputContainer = styled("div")({
    width: "50%",
    height: 40,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgray"
  })
  const Input = styled("input")({
    border: "none",
    flex: 8,
    paddingLeft: theme.spacing(4)
  })
  const Button = styled("button")({
    flex: 1,
    border: "none",
    backgroundColor: "teal",
    color: theme.palette.common.white
  })
  const { t } = useTranslation()
  return (
    <Container>
      <Title>{t("newsletter.title")}</Title>
      <Description>{t("newsletter.description")}</Description>
      <InputContainer>
        <Input placeholder={t("newsletter.placeholder")} />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
