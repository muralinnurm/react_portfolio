import React from 'react';
import "./portfolio.css";
// portfolio image
import IMG1 from '../../assets/portfolio-1.png';
import IMG2 from '../../assets/portfolio-2.png';
import IMG3 from '../../assets/portfolio-3.png';
import IMG4 from '../../assets/portfolio-4.png';
import IMG5 from '../../assets/portfolio-5.png';
import IMG6 from '../../assets/portfolio-6.png';


export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG1} alt="" /></div>
          <h3>My Old Portfolio Website </h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/muralinnurm/morsalin.github.io" className='btn' target="blank">GitHub</a>
            <a href="https://www.behance.net/gallery/139284147/PORTFOLIO-SITE-USING-HTML5-CSS3-JAVASCRIPT-BOOTSTRAP" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG2} alt="" /></div>
          <h3>Portfolio Website For Deeje</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/muralinnurm/deeje-portfolio" className='btn' target="blank">GitHub</a>
            <a href="https://www.behance.net/gallery/144756917/Portfolio-Website-Design" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG3} alt="" /></div>
          <h3>CONFIDENCE MARQUE</h3>
          <div className="portfolio-item-cta">
            <a className='btn'>No GitHub</a>
            <a href="https://www.confidencemarque.fr/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG4} alt="" /></div>
          <h3>Royal Car Care Center</h3>
          <div className="portfolio-item-cta">
            <a className='btn' target="blank">No GitHub</a>
            <a href="http://royalcarcarecenter.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG5} alt="" /></div>
          <h3>Digital Agency </h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/muralinnurm/digital-agency.github.io" className='btn' target="blank">GitHub</a>
            <a href="https://www.behance.net/gallery/138789601/Digital-Agency-Website-Design-Using-HTML-CSS" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className="portfolio-item-image"><img src={IMG6} alt="" /></div>
          <h3>Food Delivery E-Commerce</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/muralinnurm/food-delivery.github.io" className='btn' target="blank">GitHub</a>
            <a href="https://www.behance.net/gallery/138791023/Food-Delivery-E-Commers-Landing-Page" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
      <div className='behance-btn'>
        <a href='https://www.behance.net/mnur2' className="btn btn-primary">View Full Portfolio</a>
      </div>
      
    </section>
  )
}
