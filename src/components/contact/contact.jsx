import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kzpaux9', 'service_kzpaux9', form.current, 'user_Ik7YCQgoiZiMFIpjj')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>shayda.jebb@gmail.com</h5>
            <a href='mailto:shayda.jebb@gmail.com' target = '_blank'>Send a message</a>
          </article>

        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='' placeholder='Your full name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default contact