import { ShoppingCartOutlined } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { Badge } from "@mui/material"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { logout } from "redux/apiCalls"
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
  cursor: pointer;
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
  const history = useHistory()
  const states = useSelector((state) => state)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const {
    // @ts-ignore
    cart: { quantity },
    // @ts-ignore
    user: { currentUser }
  } = states
  const handleRedirect = (to = String()) => history.push(`${to}`)
  const handleLogout = () => {
    logout(dispatch)
    history.push("/")
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> {t("siteLanguage")}</Language>
          <SearchContainer>
            <Input
              placeholder={t("navbar.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon
              sx={{ color: "gray", fontSize: 16, cursor: "pointer" }}
              onClick={() => {
                history.push(`/products/${search}`)
                setSearch("")
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => handleRedirect("/")}>{t("siteName")} </Logo>
        </Center>
        <Right>
          {currentUser ? (
            <MenuItem onClick={handleLogout}>{t("sign.logout")}</MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => handleRedirect("/register")}>
                {t("sign.signup")}
              </MenuItem>
              <MenuItem onClick={() => handleRedirect("/login")}>
                {t("sign.login")}
              </MenuItem>
            </>
          )}
          <MenuItem
            // @ts-ignore
            last
          >
            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
