import styled from "styled-components"

const Svg = styled.div`

  font-size: inherit;
  & svg {
    display: block;
    width: auto;
    height: 1em;
  }
  /* & path {
    ${({ colorType = "fill" }) => colorType}: currentColor;
  } */

`

export default Svg