import { ShoppingCartOutlined } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { Badge } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import Styled from "styled-components"
import { mobile, tablet } from "../../responsive"

const Container = Styled.div`
height: 60px;
max-width: 1440px;
margin: 0 auto;
${mobile({ height: 50 })};
`
const Wrapper = Styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${tablet({ padding: "10px 0" })};
${mobile({ padding: "10px 0" })};
`
const Left = Styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${tablet({ flex: 0.7 })};
`
const Language = Styled.span`
font-size:14px;
cursor: pointer;
${mobile({ display: "none" })};
`
const SearchContainer = Styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({ marginLeft: 5 })}
  padding: 5px
`

const Input = Styled.input`
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  ${tablet({ fontSize: "14px" })};
  ${mobile({ fontSize: "10px", width: "100%" })};
`

const Center = Styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = Styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin: 0;
  ${mobile({ fontSize: 24 })};

`
const Right = Styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ maxWidth: 310 })};
  ${mobile({ flex: 1.5 })};
  `

const MenuItem = Styled.div`
  font-size: 32px;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({ fontSize: 24, marginLeft: 16 })};
  margin-right : ${(props) =>
    // @ts-ignore
    props.last && "14px"};
  ${mobile({ fontSize: 14, marginLeft: 6 })};
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
          <MenuItem
            // @ts-ignore
            last
          >
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
