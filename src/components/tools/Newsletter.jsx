import React from "react"
import styled from "styled-components"
import { Send } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import { mobile } from "responsive"

function Newsletter() {
  const Container = styled.div`
    height: 60vh;
    max-width: 1440px
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  `
  const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: 50 })};
  `
  const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })};
  `
  const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })};
  `
  const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
  `
  const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
  `
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
