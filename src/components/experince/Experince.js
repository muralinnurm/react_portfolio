import React from 'react';
import './experince.css';
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experince() {
  return (
    <section id='experince'>
      <h5>What Skill I Have</h5>
      <h2>My Experince</h2>
      <div className="container experince-container">
        <div className="experince-programming">
          <h3>Frontend Deevelopment</h3>
          <div className="experince-content">
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Learning</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince-other">
          <h3>Other Experince</h3>
          <div className="experince-content">
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Woo Commerce</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Wix</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Shopify</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experince-details'>
              <BsPatchCheckFill className='experince-details-icon'/>
              <div>
                <h4>Joomla</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
