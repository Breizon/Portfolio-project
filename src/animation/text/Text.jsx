import React from "react";
import "./text.css";

const Text = () => {
  return (
    <div className="content">
      <div className="content__container">
        <p className="content__text">Hello</p>

        <ul className="content__list">
          <li className="item">world !</li>
          <li className="item">users !</li>
          <li NclassName="item">recruiter !</li>
          <li className="item">everybody !</li>
        </ul>
      </div>
    </div>
  );
};

export default Text;
