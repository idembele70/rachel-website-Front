import { css } from "styled-components"
import PropTypes from "prop-types"

export const mobile = (props) => css`
  @media only screen and (max-width: 380px) {
    ${props}
  }
`
mobile.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired
}
export const tablet = (props) => css`
@media only screen and (max-width: 780px) {
  ${props}
}
`
tablet.propTypes = {
  props: PropTypes.instanceOf(Object).isRequired
}
