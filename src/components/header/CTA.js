import React from 'react'
import CV from '../../assets/cv.pdf'

export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primery'>Let's Talk</a>
    </div>
  )
}
