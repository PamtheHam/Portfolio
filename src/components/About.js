import React from "react";
import BlueEyelinerPic from "./assets/BlueEyelinerPH.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-intro">
          <div className="text-center about-right">
            <h3>
              Nice to meet you. My name is Pam. <br /> Welcome to my portfolio.
            </h3>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={BlueEyelinerPic}
              className="makeup-app-pic"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-intro">
          <div className="text-center about-right">
            <h6>
              After working within technology in higher education, I developed
              an interest in programming and completed the University of North
              Carolina - Chapel Hill’s Coding Bootcamp. Full-stack web developer
              with experience working in student services within higher
              education and the full-stack of web development. With excellent
              attention to detail and organizational skills, I am dedicated to
              building original and efficient web applications from start to
              finish with proficient skills in HTML, CSS, and Javascript. I
              enjoy being challenged and working outside of my comfort zone.
              Looking for the perfect match with a company that will test and
              further my knowledge of web development.
              <br />
              Outside of my professional roles, I enjoy traveling and exploring
              the world. My dream is to live and work abroad, so I can
              experience life from new perspectives. I enjoy spending time with
              my husband Chris, my long-haired chihuahua Rafa, and my chartreux
              cat Pusheen. I have a range of hobbies, including playing tennis,
              solving jigsaw and crossword puzzles, and learning new programming
              skills.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
