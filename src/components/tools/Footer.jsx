import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room
} from "@mui/icons-material"
import { styled } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import theme from "theme"

const Footer = () => {
  const { t } = useTranslation()
  const Container = styled("div")({
    display: "flex",
  })
  const Left = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4)
  })
  const Logo = styled("h1")({})
  const Description = styled("p")({
    margin: theme.spacing(4, 0)
  })
  const SocialContainer = styled("div")({
    display: "flex"
  })
  // eslint-disable-next-line react/jsx-props-no-spreading
  const SocialIcon = styled(({ ...otherProps }) => <div {...otherProps} />)`
  width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${theme.palette.common.white};
    background-color: #${(prop) => prop.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(4)}
  })`

  const Center = styled("div")({
    flex: 1,
    padding: theme.spacing(4)
  })
  const Title = styled("h3")({
    marginBottom: theme.spacing(6)
  })
  const List = styled("ul")({
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap"
  })
  const ListItem = styled("li")({
    width: "50%",
    marginBottom: theme.spacing(2)
  })
  const Right = styled("div")({
    flex: 1,
    padding: theme.spacing(4)
  })
  const ContactItem = styled("div")({
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: theme.spacing(2)
    }
  })
  const Payment = styled("img")({
    width: "50%"
  })
  return (
    <Container>
      <Left>
        <Logo>{t("siteName")}</Logo>
        <Description>{t("footer.left.description")}</Description>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>{t("footer.center.title")}</Title>
        <List>
          <ListItem>{t("footer.center.listItem.home")}</ListItem>
          <ListItem>{t("footer.center.listItem.cart")}</ListItem>
          <ListItem>{t("footer.center.listItem.manFashion")}</ListItem>
          <ListItem>{t("footer.center.listItem.womamFashion")}</ListItem>
          <ListItem>{t("footer.center.listItem.accessories")}</ListItem>
          <ListItem>{t("footer.center.listItem.myAcount")}</ListItem>
          <ListItem>{t("footer.center.listItem.orderTracking")}</ListItem>
          <ListItem>{t("footer.center.listItem.wishlist")}</ListItem>
          <ListItem>{t("footer.center.listItem.terms")}</ListItem>
        </List>
      </Center>
      <Right>
        <Title>{t("footer.right.title")}</Title>
        <ContactItem>
          <Room />
          {t("footer.right.contactItem.address")}
        </ContactItem>
        <ContactItem>
          <Phone />
          {t("footer.right.contactItem.phoneNumber")}
        </ContactItem>
        <ContactItem>
          <MailOutline />
          {t("footer.right.contactItem.email")}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
