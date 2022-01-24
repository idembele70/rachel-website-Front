import { HomeSharp, LocalGroceryStore } from "@mui/icons-material"
import React from "react"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import { mobile, tablet } from "responsive"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 311px;
  border-right: 2px solid #e5e5e5;
  ${tablet({
  height: "auto",
  maxHeight: 74,
  flexDirection: "row",
  borderBottom: "2px solid #e5e5e5"
})};
  ${mobile({ minWidth: "initial" })}
`
const LogoContainer = styled.div`
  padding: 24px;
  height: 54px;
  border-bottom: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  ${tablet({
  borderBottom: "none",
  borderRight: "2px solid #e5e5e5",
  padding: 10
})}
  ${mobile({ padding: "0 5px" })}
`
const Logo = styled.h1`
  cursor: pointer;
  font-family: "Gill Sans", sans-serif;
  font-size: 27px;
  font-weight: lighter;
  ${mobile({ fontSize: 15 })}
`

const MainContainer = styled.div`
  padding: 35px 0;
  flex: 1;
  ${tablet({ display: "flex", padding: 10 })}
  ${mobile({ padding: 0 })}
`
const MainItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  &:hover {
    background: #4f9ae726;
    & > * {
      color: #4f9ae7;
    }
    cursor: pointer;
  }
  ${tablet({ padding: 0, flex: 1, justifyContent: "center" })};
`
const MainItemTitle = styled.h1`
  margin-left: 10px;
  font-size: 22px;
  font-weight: 500;
  ${mobile({ fontSize: 14, lineHeight: "24px" })}
`
const StyledHomeSharp = styled(HomeSharp)`
  & > path {
    ${mobile({ fontSize: 14 })}
  }
`
const StyledLocalGroceryStore = styled(LocalGroceryStore)`
  & > path {
    ${mobile({ fontSize: 14 })}
  }
`

export default function Sidebar() {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <Container>
      <LogoContainer>
        <Logo onClick={() => history.push("/")}>{t("siteName")}</Logo>
      </LogoContainer>
      <MainContainer>
        <MainItem onClick={() => history.push("/user")}>
          <StyledHomeSharp />
          <MainItemTitle>Home</MainItemTitle>
        </MainItem>
        <MainItem onClick={() => history.push("/user/orders")}>
          <StyledLocalGroceryStore />
          <MainItemTitle>Orders</MainItemTitle>
        </MainItem>
      </MainContainer>
    </Container>
  )
}

