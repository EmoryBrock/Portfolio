import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/emory-brock/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/EmoryBrock-Portfolio/' target="_blank"><BsGithub/></a>        
    </div>
  )
}
 