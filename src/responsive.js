import { css } from "styled-components"
import PropTypes from "prop-types"

export const mobile = (props) => css`
  @media only screen and (max-width: 600px) {
    ${props}
  }
`
mobile.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired
}
export const tablet = (props) => css`
  @media only screen and (max-width: 1100px) {
    ${props}
  }
`
tablet.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired
}
