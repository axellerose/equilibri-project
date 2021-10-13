import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'

import NavBar from './NavBar'

import background from '../assets/background.png'
import { up } from '../mixins'

const Wrapper = styled.div`
  max-width: 100%;
  height: 25vh;

  ${up.md`
    height: 35vh;
  `}
  ${up.lg`
    height: 40vh;
  `}
  ${up.xl`
    height: 45vh;
  `}
`

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  img {
    opacity: 0.65;
  }
`

const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 75px;
  margin: 0;
  max-width: ${between('300px', '780px', '600px', '1900px')};
  font-size: ${between('32px', '79px', '600px', '1900px')};
  line-height: ${between('25px', '60px', '600px', '1900px')};
  font-weight: 400;
  color: #7BA0C4;
  
`

const Header = () => {
  return (
    <Wrapper>
      <Hero>
        <Title>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </Title>
      </Hero>
      <NavBar />

    </Wrapper>
  )
}

export default Header
