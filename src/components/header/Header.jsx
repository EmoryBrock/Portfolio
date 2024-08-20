import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from "../../assets/eb_vector_me-01.png"
import HeaderSocials from './HeaderSocials.jsx'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Welcome to</h5>
        <h1>Emory Brock's</h1>
        <h5 className='text-light'>Fullstack Developer Portfolio</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='3d computer generated graphic illustration of myself' />
        </div>

        <a href='#contact' className='scroll__down'>Get In Touch</a>

      </div>
    </header>
  )
}
