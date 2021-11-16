import { ShoppingCartOutlined } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { Badge } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import Styled from "styled-components"
import { mobile, tablet } from "../../responsive"

const Container = Styled.div`
height: 60px;
${mobile({ height: 50 })};
`
const Wrapper = Styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${tablet({ padding: "10px 0px" })};
`
const Left = Styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${mobile({ display: "none" })}
`
const Language = Styled.span`
font-size:14px;
cursor: pointer;
${tablet({ display: "none" })};
`
const SearchContainer = Styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px
`

const Input = Styled.input`
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  ${mobile({ width: "70%" })};
`

const Center = Styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = Styled.h1`
  font-weight: bold;
  margin: 0;
  ${mobile({ fontSize: 24 })};

`
const Right = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
  `

const MenuItem = Styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: 18, marginLeft: 8 })};
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

