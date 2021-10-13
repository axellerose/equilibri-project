import React from 'react'
import { between } from 'polished'
import styled from 'styled-components'
import { down } from '../mixins'


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

  ${down.md`
    width: 100%;
    display: flex;
    
    padding-bottom: 25px; 

    & img {
      height: 150px;
      width: 150px;
    }

    & .service__text {
      padding-left: 25px;
      width: 60%;
      margin: 0 auto;
    }

    &.even {
      display: flex;
      flex-direction: row-reverse;

      & .service__text {
        padding-left: 0;
        padding-right: 25px;
      }
    }
  `}
  ${down.sm`
    width: 100%;
    display: flex;
    flex-diretion: column;
    justify-content: center;

    padding-bottom: 25px; 

    & img {
      height: 150px;
      width: 240px;
      padding-bottom: 15px;
    }

    & .service__image, service__text {
      padding-left: 0;
      padding-right: 0;
      margin: 0 auto;
    }

    &.even {
      flex-direction: column;
      & .service__text {
        padding-left: 0;
        padding-right: 0;
        width: 80%;
      }
    }
    &.odd {
      flex-direction: column;
      & .service__text {
        padding-left: 0;
        padding-right: 0;
        width: 80%;
      }
    }
  `}
`

const ServiceCard = ({ image, text, title, position }) => {

  return (
    <Card className={position}>
      <div className="service__image">
        <img src={image} alt="service" />
      </div>

      <div className="service__text">
        <h3>{title} </h3>
        <p>{text}</p>
      </div>

    </Card>
  )
}

export default ServiceCard
