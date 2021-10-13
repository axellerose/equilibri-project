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
    height: 33vh;
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

const Title = styled.div`

  position: absolute;
  top: 50%;
  left: 75px;
  margin: 0;
  max-width: ${between('300px', '780px', '600px', '1900px')};
  & h1 {
    font-size: ${between('32px', '79px', '600px', '1900px')};
    line-height: ${between('25px', '79px', '600px', '1900px')};
    font-weight: 400;
    color: #7BA0C4;
  }

  ${up.lg`
    top: 40%;
  `}
`

const Spacer = styled.div`
  color:  #7BA0C4;
  border-bottom: 2px solid  #7BA0C4;
  padding-top: ${between('32px', '50px', '600px', '1900px')};
  width: 25%;
`

const Header = () => {
  return (
    <Wrapper>
      <Hero>
        <Title>
          <h1>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </h1>
          <Spacer />
        </Title>
      </Hero>
      <NavBar />

    </Wrapper>
  )
}

export default Header
