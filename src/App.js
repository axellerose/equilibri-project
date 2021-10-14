import React from 'react'
import styled from 'styled-components'

import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffffe;
  font-family: 'Baloo 2', cursive;
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