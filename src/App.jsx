import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import React, { useState } from 'react'


function App() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <Header />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About />
      <Portfolio />
      <Contact />
      <Footer setActiveNav={setActiveNav}/>
    </>
  )
}

export default App
