import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
// import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import IMG from "../../assets/image-5.png";

const Footer = () => {
  return (
    <footer>
      <div className="img_container">
        <img className="img_footer" src={IMG} alt="img-footer" />
      </div>
      <a href="#" className="footer_logo">
        BECN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/breizon-caiza-naranjo-19a136256/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/esteban.caiza.568" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Breizon" target="_blank">
          <BsGithub />
        </a>
        {/* <a href="https://twitter.com/Becn2772" target="_blank">
          <IoLogoTwitter />
        </a> */}
      </div>

      <div className="footer_copyright">
        <small>&copy; BECN. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
