import React from 'react'
import "./footer.css"
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillBehanceCircle} from 'react-icons/ai';
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>MORSALIN NUR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experince">Experince</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://www.facebook.com/mursalinnurm/" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/morsalin.nur/" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/muralinnurm/" target="_blank"><BsGithub /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Morsalin Nur. All Right Recerved</small>
      </div>
    </footer>
  )
}
