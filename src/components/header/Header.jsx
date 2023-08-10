import React from "react";
import "./header.css";
import ME from "../../assets/image-me.png";
import CV from "./CV";
import Text from "../../animation/text/Text";

const Header = () => {
  return (
    <header>
      <div className="me">
        <img className="me_img" src={ME} alt="img-me" />
      </div>
      <div className="text_animate">
        <Text />
      </div>
      <div className="container header_container">
        <h1>My name is Breizon</h1>
        <h4 className="text_light">Full Stack Web Developer</h4>
      </div>
      <div className="btn_container">
        <div className="btn_border">
          <CV />
        </div>
        <div className="btn_border">
          <a className="hire_me btn btn-primary" href="#contact">
            HIRE ME
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
