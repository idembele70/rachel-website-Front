import { ShoppingCartOutlined } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { Badge } from "@mui/material"
import Styled from "Styled-components"
import React from "react"
import { useTranslation } from "react-i18next"

const Container = Styled.div`
height: 60px
`
const Wrapper = Styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left = Styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Language = Styled.div`
font-size:14px
cursor: pointer;
`
const SearchContainer = Styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px
`

const Input = Styled.input`
  border: none;
`

const Center = Styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = Styled.h1`
  font- weight: bold;
  margin: 0;
`
const Right = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = Styled.div`
  font- size: 14;
  cursor: pointer;
  // @ts-ignore
  marginLeft: 25px
`

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> {t("siteLanguage")}</Language>
          <SearchContainer>
            <Input placeholder={t("navbar.search")} />
            <SearchIcon sx={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>{t("siteName")} </Logo>
        </Center>
        <Right>
          <MenuItem>{t("sign.signup")}</MenuItem>
          <MenuItem>{t("sign.login")}</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
