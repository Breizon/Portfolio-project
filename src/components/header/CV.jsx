import React from "react";
import "./header.css";
import cv from "../../assets/BreizonCaiza-CV.pdf";

const CV = () => {
  return (
    <div className="cv">
      <a className="btn btn-primary" href={cv} target="_blank">
        Download CV
      </a>
    </div>
  );
};

export default CV;
