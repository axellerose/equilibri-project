import React, { useState } from 'react'

import styled from 'styled-components'


import emailjs from 'emailjs-com'

import { up, down } from '../mixins'
import { between } from 'polished'

const SERVICE_ID = "service_2hbk8ik"
const TEMPLATE_ID = "template_i1orztk"
const USER_ID = "user_GnAQQ4LSUn6SizUjTUVMb"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 75px 75px 75px;

  ${down.sm`
    padding: 0 30px 20px 20px;
  `}
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${up.lg`
    justify-content: flex-start;
  `}

  ${down.sm`
    flex-direction: column;
    justify-content: center;
  `}
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

const Description = styled.div`
width: 33%;
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    padding-top: 20px;
  }
  p {
    font-size: ${between('18px', '24px', '600px', '2560px')};
    line-height: ${between('18px', '24px', '600px', '2560px')};
    color: #808080;
  }

  ${down.sm`
    width: 100%;

  `}
`

const StyledForm = styled.form`
    padding-bottom: 20px; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 66%;
    background-color: rgba(255,255,255, 0.15);
    border-radius: 10px;

    ${down.md`
      flex-direction: column;
    `}

    ${down.sm`
      justify-content: center;
      flex-direction: column;
      margin: 0 auto;
      padding-top: 25px;
      padding-left: 0;
      width: 75%;
      flex-wrap: no-wrap;
    `}

    ${up.lg`
      width: 50%;
    `}

    color: #808080;
    /* ${up.sm`
        width: 50%;
    `}
    ${up.md`
        width: 40%;
    `} */
    h3 {

    }
    .form__control {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px 0px;

      ${down.md`
        width: 100%;
      `}
      ${down.sm`
        width: 100%;
      `}
    }
    & input {
        width: 100%;
        height: 42px;
        border: 1px solid #808080;
        border-radius: 10px;
        padding: 0 10px;
        color: #808080;

        ${down.sm`
          max-width: 100%;
        `}
        /* &::placeholder {
            font-size: 0.8em;
        } */
    }
    & textarea {
      width: 100%;
      border: 0.25px solid #808080;
      border-radius: 10px;
      padding: 10px;
      color: #808080;
      
    }
    
    & label {
        width: 35%;
        white-space: nowrap;
    }

`

const StyledButton = styled.button`
  margin-top: 25px;
  padding: 15px 30px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 18px;
  color: #fffffe;
  background-color: #7BA0C4;
`

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 10px;

  & input {
    width: 15px;
    height: 15px;
  }

  & p {
    padding-left: 15px;
    font-size: 10px;
    line-height: 18px;

    ${up.md`
      font-size: 14px;
    `}
  }
`

const ContactUs = () => {


  const [template, setTemplate] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })


  const sendEmail = e => {

    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(() => {

        // alert("Thanks for reaching me out ! I will contact you back soon, cheers!");

      }, (error) => {
        console.log(error.text)
      }).finally(() => clearForm(), 2000)

  }

  const changeHandler = e => {
    setTemplate({ ...template, [e.target.name]: e.target.value })
  }

  const clearForm = () => {
    setTemplate({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    })
  }

  return (
    <Wrapper id="contact-us">
      <Title>
        Contacte
      </Title>

      <Container>
        <Description>
          <ul>
            <li>
              <p>
                ADREÇA<br />
                Rambla Nova 117 3r 1a<br />
                43001 Tarragona
              </p>
            </li>
            <li>
              <p>
                MAIL<br />
                info@equilibrilegal.com
              </p>
            </li>
            <li>
              <p>
                TELÈFON<br />
                +977 234 811<br />
                +977 234 800
              </p>
            </li>
            <li>
              <p>
                HORARI<br />
                Dilluns-dijous: 08.00-18.00<br />
                Divendres: 09.00-14.00
              </p>
            </li>
          </ul>


        </Description>
        <StyledForm id="contacts" className="contact-form" onSubmit={sendEmail}>

          <div className="form__control" >
            <label htmlFor="">Nom*</label>
            <input
              type="text"
              name="name"
              value={template.name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__control">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={template.email}
              onChange={changeHandler}
            />
          </div>
          <div className="form__control">
            <label htmlFor="">Telèfon*</label>
            <input
              type="text"
              name="phone"
              value={template.phone}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form__control">
            <label htmlFor="">Ciutat</label>
            <input
              type="text"
              name="city"
              value={template.city}
              onChange={changeHandler}
            />
          </div>
          <div className="form__control" style={{ width: '100%' }}>
            <label htmlFor="message">Missatge</label>
            <textarea
              required
              name="message"
              value={template.message}
              type="text"
              rows="7"
              onChange={changeHandler}
            />
          </div>
          <div style={{ width: '100%' }}>
            <StyledButton type="submit">Enviar</StyledButton>
          </div>
          <StyledCheckbox>
            <input type="checkbox" />
            <p>Nota Legal</p>
          </StyledCheckbox>
          <StyledCheckbox>
            <input type="checkbox" />
            <p>He llegit i accepto la política de privacitat</p>
          </StyledCheckbox>
        </StyledForm>
      </Container>
    </Wrapper>
  )
}

export default ContactUs