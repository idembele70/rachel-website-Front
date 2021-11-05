import { styled } from "@mui/material/styles"
import React from "react"
import { useTranslation } from "react-i18next"
font - weight

const Container = styled.div`
  height: 30,
  background- color: "teal",
  color: "white",
  display: flex;
  align - items: center;
  justify - content: center;
  font - size: 14,
  font - weight: theme.typography.font - weightMedium
})

const Announcement = () => {
  const { t } = useTranslation()
  return <Container>{t("announcement")}</Container>
}

export default Announcement
