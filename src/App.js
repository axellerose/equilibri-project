import React from 'react'
import styled from 'styled-components'

import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'

const Wrapper = styled.div`
  @font-face {
    font-family: 'Baloo 2';
    src: url('./fonts/Baloo2-Regular.ttf');
  }
  font-family: 'Baloo 2';
  position: absolute;
  inset: 0;
  background-color: #fffffe;
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Wrapper>
  )
}

export default App