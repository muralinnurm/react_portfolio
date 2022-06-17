import React from 'react';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { SiSkypeforbusiness } from 'react-icons/si'
import { RiMessengerLine } from 'react-icons/ri'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xg6f10i', 'template_bgvtrqm', form.current, '4unCOK0dzxeziFVoa')
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Tuch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>morsalinnurmahim@gmail.com</h5>
            <a href="mailto:morsalinnurmahim@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact-option'>
            <SiSkypeforbusiness className='contact-option-icon' />
            <h4>Skype</h4>
            <h5>Morsalin Nur Mahim</h5>
            <a href="https://join.skype.com/invite/uygKuaHinPC0" target="_blank">Send a Message</a>
          </article>

          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messanger</h4>
            <h5>Morsalin Nur</h5>
            <a href="https://m.me/mursalinnurm" target="_blank">Send a Message</a>
          </article>
        </div>

        {/* end of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required autoComplete='off' />
          <input type="text" name='subject' placeholder='Your Subject' required autoComplete='off' />
          <input type="email" name="email" placeholder='Your Email' required autoComplete='off' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary submit-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
