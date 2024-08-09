import React, {useRef, useState} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()
  const [submitFeedback, setSubmitFeedback] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

   emailjs
   .sendForm('service_0ca4l6n', 'template_0ujd7nf', form.current, {
    publicKey: 'gn0a3RQ7tP22W8IBD'
   })
   .then((result) => {
    setSubmitFeedback('Your email has been sent successfully!')
    setSubmitStatus('success')
   }, (error) => {
    setSubmitFeedback('Failed to send email. Please try again.')
    setSubmitStatus('error')
   })

   e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container"> 
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>ebrock.dev at gmail.com</h5>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {submitFeedback && <p className={`submit-status ${submitStatus}`}>{submitFeedback}</p>}
      </div>  
    </section>
  )
}
