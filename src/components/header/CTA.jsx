import React from 'react'
import CV from '../../assets/BROCK_Emory_CV.pdf'

export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
    </div>
  )
}
