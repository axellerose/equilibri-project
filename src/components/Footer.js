import React from 'react'
import styled from 'styled-components'
import { down } from '../mixins'

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  background-color: #808080;
  color: #fffffe;
  padding: 15px 75px;
  font-size: 12px;

  ${down.sm`
    padding: 10px 20px;
  `}
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © Copyright 2021 | Adreça · Contacte
      </p>
      <p>
        Disseny web: ?
      </p>
    </StyledFooter>
  )
}

export default Footer
