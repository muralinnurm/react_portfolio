import React from "react";
import "./about.css";
import myImage from "../../assets/about-img.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={myImage} alt="My Image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>3+ Client Worldwide</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi
            ipsa, beatae eveniet reiciendis vero excepturi sapiente quos ducimus
            molestiae! Ducimus molestiae reprehenderit dolorem soluta harum
            commodi. Nemo, animi enim?
          </p>

          <a href="#contact" className="btn btn-primery">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
