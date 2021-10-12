import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'

import image1 from '../assets/signature.jpg'
import image2 from '../assets/gabriel.jpg'
import image3 from '../assets/office.png'
import image4 from '../assets/columns.jpg'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 75px 100px 75px;
`

const Title = styled.h1`
  padding-top: 60px;
  padding-bottom: 20px;
  margin: 0;
  max-width: ${between('300px', '780px', '600px', '2560px')};
  font-size: ${between('42px', '96px', '600px', '2560px')};
  font-weight: 400;
  color: #7BA0C4;
`

const CardsList = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
width: 100%;
`

const Services = () => {
  return (
    <Wrapper>
      <Title>
        Serveis
      </Title>
      <CardsList>
        <ServiceCard image={image1} title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl." />
        <ServiceCard image={image2} title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl." />
        <ServiceCard image={image3} title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl." />
        <ServiceCard image={image4} title="LOREM IPSUM" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl." />
      </CardsList>
    </Wrapper>
  )
}

export default Services
