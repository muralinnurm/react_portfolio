import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experince from './components/experince/Experince'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <>
        <Header/>
        <Nav />
        <About />
        <Experince />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    </div>
  )
}

export default App
