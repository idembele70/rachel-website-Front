import { styled } from "@mui/material/styles"
import React from "react"
import { useTranslation } from "react-i18next"

const Container = styled("div")({
  height: 30,
  backgroundColor: "teal",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  fontWeight: 500
})

const Announcement = () => {
  const { t } = useTranslation()
  return <Container>{t("announcement")}</Container>
}

export default Announcement