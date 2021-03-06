import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'

import logo from '../assets/logo.png'
import { MobileMenu } from './MobileMenu'
import { down } from '../mixins'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 60px;
  left: 80px;
  right: 80px;

  ${down.sm`
    top: 35px;
    left: 25px;
    right: 25px;
  `}
`

const Logo = styled.img`
  ${down.sm`
    width: 150px;
  `}
`

const Navigation = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  
  li {
    padding: 0 25px;
    font-size: ${between('18px', '26px', '600px', '2560px')};

    a {
      text-decoration: none;
      color: #808080;
      
    }
  }

  ${down.sm`
    display: none;
  `}
`

const NavBar = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <MobileMenu />
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
