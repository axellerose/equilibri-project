import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 75px;
  color: #fff;
  background-color: #7BA0C4;
`

const Title = styled.h1`
  width: 35%;
  margin: 0;
  font-size: ${between('42px', '96px', '600px', '2560px')};
  font-weight: 400;
`

const Text = styled.div`
  width: 65%;
  padding-right: 25px;
  h3 {
    font-size: ${between('16px', '22px', '600px', '2560px')};
  }

  p {
    font-size: ${between('14px', '20px', '600px', '2560px')};
  }
`

const AboutUs = () => {
  return (
    <Wrapper id="about-us">
      <Title>
        Qui som
      </Title>
      <Text>
        <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. </p>
      </Text>

    </Wrapper>
  )
}

export default AboutUs
