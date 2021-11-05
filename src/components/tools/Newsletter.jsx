import React from "react"
import styled from "styled-components"
import { Send } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
font - weight

function Newsletter() {
  const Container = styled.div`
    height: "60vh",
    background- color: theme.palette.grey.A100,
    display: flex;
    align - items: center;
    justify - content: center;
    flex - direction: "column"
  })
const Title = styled("h1")({
  font- size: 70,
  marginBottom: theme.20px
  })
const Description = styled.div`
  font - size: 24,
    font - weight: 300,
      marginBottom: theme.20px
})
const InputContainer = styled.div`
  width: "50%",
  height: 40,
  background- color: theme.palette.common.white,
  display: flex;
  justify - content: "space-between",
  border: "1px solid lightgray"
})
const Input = styled("input")({
  border: "none",
  flex: 8,
  paddingLeft: theme.20px
})
const Button = styled("button")({
  flex: 1,
  border: "none",
  background- color: "teal",
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
