import React from "react";
import "./about.css";
import Me from "../../assets/image-1.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about" className="section_about">
      <h5>Come and meet me</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card ">
              <FaAward className="about_icon" />
              <h5>Training</h5>
              <small>Academlo Full Stack Web Development</small>
            </article>

            <article className="about_card ">
              <FiUser className="about_icon" />
              <h5>Experience</h5>
              <small>1 year of experience</small>
            </article>

            <article className="about_card ">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>8+ Developed</small>
            </article>
          </div>

          <p>
            I am a dynamic and innovative professional with over 1 year of
            invaluable hands-on experience managing multiple web development
            projects, front-end and back-end functional development, creative
            design and concept building.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
