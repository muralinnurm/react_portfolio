import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/my-img.png';
import HeaderSocial from './HeaderSocial';

export default function Header() {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Morsalin Nur</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}
