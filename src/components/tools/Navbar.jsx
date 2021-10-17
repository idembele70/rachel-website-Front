import { ShoppingCartOutlined } from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search"
import { AppBar, Badge, Toolbar, Typography, styled } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import Announcement from "./Announcement"

const useStyles = makeStyles((theme) => ({
  language: {
    fontSize: 14,
    cursor: "pointer"
  },
  wrapper: {
    // @ts-ignore
    padding: `${theme.spacing(2, 5)} !important`
  },
  logo: {
    height: 60,
    width: 60
  }
}))

const Left = styled("div")({
  display: "flex",
  alignItems: "center",
  flex: 1
})
const SearchContainer = styled("div")(({ theme }) => ({
  border: "1px solid lightgray",
  display: "flex",
  alignItems: "center",
  // @ts-ignore
  marginLeft: theme.spacing(5),
  padding: theme.spacing(1)
}))

const Input = styled("input")({
  border: "none"
  // @ts-ignore
})

const Center = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const Logo = styled("h1")({
  fontWeight: "bold",
  margin: 0
})
const Right = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end"
})

const MenuItem = styled("div")(({ theme }) => ({
  fontSize: 14,
  cursor: "pointer",
  // @ts-ignore
  marginLeft: theme.spacing(5)
}))

const Navbar = ({ announcePosition }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <AppBar color="inherit" sx={{ position: "relative" }}>
      {announcePosition === "top" && <Announcement />}
      <Toolbar className={classes.wrapper}>
        <Left>
          <Typography
            variant="body2"
            component="span"
            className={classes.language}
          >
            {t("siteName")}
          </Typography>
          <SearchContainer>
            <Input />
            <SearchIcon sx={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>{t("siteName")} </Logo>
        </Center>
        <Right>
          <MenuItem>{t("sign.login")}</MenuItem>
          <MenuItem>{t("sign.signup")}</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Toolbar>
      {announcePosition === "bottom" && <Announcement />}
    </AppBar>
  )
}

export default Navbar
Navbar.propTypes = {
  announcePosition: PropTypes.string
}
Navbar.defaultProps = {
  announcePosition: "top"
}
