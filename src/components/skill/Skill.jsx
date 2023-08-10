import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";

import "./skill.css";

const Skill = () => {
  return (
    <section id="skill" className="section_skill">
      <h5>More than knowledge, they're skills</h5>
      <h2>Skills</h2>

      <div className="container skill_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <AiFillHtml5 className="skill_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BiLogoCss3 className="skill_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BiLogoJavascript className="skill_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BiLogoReact className="skill_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*End of frontend */}

        {/*Start of Backend */}
        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <BiLogoNodejs className="skill_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skill_details">
              <BiLogoPython className="skill_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Medium</small>
              </div>
            </article>
            <article className="skill_details">
              <BiLogoPostgresql className="skill_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
