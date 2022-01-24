import {
  CallOutlined,
  HomeOutlined,
  LocationCity,
  MailOutline,
  MarkunreadMailboxOutlined,
  PermIdentityOutlined
} from "@mui/icons-material"
import React from "react"
import { mobile, tablet } from "responsive"
import Styled from "styled-components"

const Container = Styled.div`
flex: 4;
display: flex;
align-items:center;
justify-content:center;
background: darkgray;
padding: 20px;
`
const Card = Styled.div`
max-width: 500px;
width: 100vw;
height: 711px;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
border-radius: 5px;
box-shadow: 0 0 3px black;
${mobile({ width: "calc(100vw - 40px)" })}
`
const CardTop = Styled.div`
width: 100%;
background-image: url(${process.env.PUBLIC_URL}/assets/img/user/mockImgFeuille.jpeg);
background-size: cover;
height: 275px;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`
const CardTitle = Styled.h2`
color: white;
margin: 15px 0 5px;
`
const CardDate = Styled.h3`
color: #ffffffbd;
font-weight: 100;
`
const CardImg = Styled.img`
border-radius: 50px;
top: 100px;
height: 100px;
width: 100px;
`
const CardBottom = Styled.div`
flex:1;
width: 100%;
height: 500px;
`
const CardBottomWrapper = Styled.div`
margin: 15px;
height: calc(100% - 30px);
`

const BottomTitle = Styled.h2`
font-weight: 400;
font-size: 26px;
font-style: normal;
margin-bottom: 25px;
`

const BottomField = Styled.div`
position: relative;`
const Label = Styled.label`
color: gray;
padding: 8px 5px;
`
const Input = Styled.input`
background:darkgray;
border: none;
border-bottom: 1px solid gray;
width: calc(100% - 10px);
padding: 8px 0;
margin: 0 5px 15px;
color: black;
font-size: 16px;
&:focus-visible {
  outline: 2px solid #4f9ae7;
}
`
export default function Main() {
  const fieldIcon = {
    position: "absolute",
    right: 4,
    top: "50%",
    transform: "translateY(-50%)"
  }
  return (
    <Container>
      <Card>
        <CardTop>
          <CardImg
            src={`${process.env.PUBLIC_URL}/assets/img/user/mockImg.png`}
          />
          <CardTitle>IKD Doe</CardTitle>
          <CardDate>Registered: 17 Aout 2022</CardDate>
        </CardTop>
        <CardBottom>
          <CardBottomWrapper>
            <BottomTitle>Contact details</BottomTitle>
            <BottomField>
              <Label>Name</Label>
              <Input disabled defaultValue="Jana Strassmann" />
              <PermIdentityOutlined sx={fieldIcon} />
            </BottomField>
            <BottomField>
              <Label>Email</Label>
              <Input disabled defaultValue="jana_Strassmann@punk.au" />
              <MailOutline sx={fieldIcon} />
            </BottomField>
            <BottomField>
              <Label>Phone</Label>
              <Input disabled defaultValue="+44 370 879 8794" />
              <CallOutlined sx={fieldIcon} />
            </BottomField>
            <BottomField>
              <Label>Address</Label>
              <Input disabled defaultValue="36 Brown Drive" />
              <HomeOutlined sx={fieldIcon} />
            </BottomField>
            <BottomField>
              <Label>City</Label>
              <Input disabled defaultValue="Lake Mary" />
              <LocationCity sx={fieldIcon} />
            </BottomField>
            <BottomField>
              <Label>Postal box</Label>
              <Input disabled defaultValue="TN15 8JE" />
              <MarkunreadMailboxOutlined sx={fieldIcon} />
            </BottomField>
          </CardBottomWrapper>
        </CardBottom>
      </Card>
    </Container>
  )
}
