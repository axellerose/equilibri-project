import React from 'react'
import styled from 'styled-components'
import { between } from 'polished'

import NavBar from './NavBar'

import background from '../assets/background.png'

const Wrapper = styled.div`
  max-width: 100%;
  height: 75vh;
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
  left: 5%;
  margin: 0;
  max-width: ${between('300px', '780px', '400px', '1200px')};
  font-size: ${between('32px', '79px', '400px', '1200px')};
  line-height: ${between('25px', '60px', '400px', '1200px')};
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
