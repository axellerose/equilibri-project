import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'


const Card = styled.div`
width: ${between('140px', '450px', '600px', '2560px')};

  img {
    height: ${between('140px', '450px', '600px', '2560px')};
    width: ${between('140px', '450px', '600px', '2560px')};
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: ${between('16px', '22px', '600px', '2560px')};
    color: #808080;
  }

  p {
    color: #808080;
    font-size: ${between('14px', '20px', '600px', '2560px')};
  }
`

const ServiceCard = ({ image, text, title }) => {

  return (
    <Card>
      <img src={image} alt="service" />
      <h3>{title} </h3>
      <p>{text}</p>
    </Card>
  )
}

export default ServiceCard
