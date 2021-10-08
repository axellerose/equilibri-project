import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png'

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
  position: absolute;
  top: 60px;
  left: 80px;
  right: 80px;
`

const Logo = styled.img`
  // TODO : responsive for small screens
`

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  
  li {
    padding: 0 10px;

    a {
      text-decoration: none;
      color: #808080;
    }
  }
`

const NavBar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Navigation>
        <li>
          <a href="#about-us">Sobre nosaltres</a>
        </li>
        <li>
          <a href="#services">Serveis</a>
        </li>
        <li>
          <a href="#contact-us">Contacte</a>
        </li>
      </Navigation>
    </Wrapper>
  )
}

export default NavBar
