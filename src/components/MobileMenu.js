import React from 'react'
import styled from 'styled-components'

import { ReactComponent as OpenMenu } from '../assets/menu.svg'
import { up } from '../mixins'
import Svg from './common/Svg'

const Container = styled.div`
    input[type='checkbox'] {
        transform: scale(0);
        width: 2.7em;
        height: 2.7em;
        z-index: 4;
    }
    input[type="checkbox"]:checked + .menu__container {
       transform: translateX(0);
    }
    label {
        position: relative;
        z-index: 6;
    }
    .menu__container {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0;
        padding: 0;
        background-color: #fffe;
        transform: translateY(-100%);
        transition: transform .35s ease;
        z-index: 4;
    }
    ${up.sm`
            display: none
        `}
`

const StyledSvg = styled(Svg)`
    width: 100%;
    width: 2em;
    position: absolute;
    cursor: pointer;
    & svg { 
        height: 1.875em;
        color: #7BA0C4;
    }
    & path {
    ${({ colorType = "fill" }) => colorType}: currentColor;
  } 
`
const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`
const Option = styled.li`
    a {
        text-decoration: none;
        color: #7BA0C4;
        font-size: 48px;
        margin: 0 auto;
        &:focus {
            outline: none;
        }
    }
    text-align: center;

    margin-bottom: 1em;
    &:hover, :active {
        color: #0bA0C0;
    }
`

export const MobileMenu = () => {
  const handleClick = () => {
    let checkbox = document.getElementById("cb")
    return checkbox.checked = false
  }

  return (
    <Container >
      <label htmlFor="cb">
        <StyledSvg>
          <OpenMenu />
        </StyledSvg>
      </label>
      <input id="cb" type="checkbox" />
      <Menu className="menu__container" >
        <input id="cb" type="checkbox" />
        <Option onClick={handleClick}><a href="#about-us">Sobre nosaltres</a></Option>
        <Option onClick={handleClick}><a href="#services">Serveis</a></Option>
        <Option onClick={handleClick}><a href="#contact-us">Contacte</a></Option>
      </Menu>
    </Container>
  )
}