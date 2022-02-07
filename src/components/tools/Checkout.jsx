// @ts-nocheck
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  ShippingAddressElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useMemo, useState } from "react"
import { mobile } from "responsive"
import styled from "styled-components"

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #27303ae8;
  padding: 10px 0;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
`
const FormItem = styled.div`
  width: 40%;
`
const StripeInput = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  font-size: 1em;
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  &::placeholder {
    color: red;
  }
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    transition: all 150ms ease;
  }
`
const Label = styled.label`
  color: #6b7c93;
  font-weight: 300;
  letter-spacing: 0.025em;
`
const Input = styled.input`
  display: block;
  width: -webkit-fill-available;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  font-size: 1em;
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  &::placeholder {
    color: #aab7c4;
  }
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    transition: all 150ms ease;
  }
`
const Button = styled.button`
  white-space: nowrap;
  border: 0;
  outline: 0;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #6772e5;
  text-decoration: none;
  transition: all 150ms ease;
  &:hover {
    color: #fff;
    cursor: pointer;
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.11), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`
function Checkout() {
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    address: "",
    postalCode: "",
    city: "",
    phone: ""
  })
  /*   const { firstname, lastname, address, postalCode, city, phone } = info
  const handleUpdate = (ev) => {
    ev.preventDefault()
    const { name, value } = ev.target
    setInfo({ ...info, [name]: value })
  } */
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: 18,
          color: "#424770",
          letterSacping: "0.025em",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  )

  const stripe = useStripe()
  const elements = useElements()
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!stripe || !elements) {
      console.log("stripe js has not loaded!")
      return
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      amount: 1000,
      card: elements.getElement(CardNumberElement),
      billing_details: {
        address: {
          city: "Toulouse",
          country: "FR",
          line1: "2 rue de la vaiselle",
          postal_code: "31190",
          state: "Occitanie"
        },
        email: "ikd@mail.fr",
        name: "ikd dki",
        phone: "0674794916"
      }
    })
    console.log(payload)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Label>Email</Label>
          <Input placeholder="EMAIL" name="email" />
        </FormItem>
        <FormItem>
          <Label>Address</Label>
          <Input placeholder="ADDRESS" name="address" />
        </FormItem>
        <FormItem>
          <Label>CP</Label>
          <Input placeholder="CP" name="zip" />
        </FormItem>
        <FormItem>
          <Label>Ville</Label>
          <Input placeholder="Ville" name="city" />
        </FormItem>
        <FormItem>
          <Label>Country</Label>
          <Input placeholder="country" name="country" />
        </FormItem>
        <FormItem>
          <Label>Phone</Label>
          <Input placeholder="PHONE" name="phone" />
        </FormItem>
        <FormItem>
          <Label>Card Number</Label>
          <StripeInput component={<CardNumberElement options={options} />} />
        </FormItem>
        <FormItem>
          <Label>Expiration</Label>
          <StripeInput component={<CardExpiryElement options={options} />} />
        </FormItem>
        <FormItem>
          <Label>CVC</Label>
          <StripeInput component={<CardCvcElement options={options} />} />
        </FormItem>
        <Button type="submit" disabled={!stripe}>
          PAY
        </Button>
      </Form>
    </Container>
  )
}

export default Checkout
