import React from "react";

const NameCard = () => {
  return (
    <>
      <p className="nav-link">Pamela Hammond</p>
      <div id="home" className="name-card">
        <div className="headshot-card">
          <img
            src={process.env.PUBLIC_URL + "/images/Pam6.JPG"}
            className="about-img"
            alt="Pamela Hammond"
          />
        </div>

        <div className="name-div">
          <h5>Hello, my name is Pamela Hammond.</h5>
          <h5>Full Stack Web Developer</h5>
          <button className="button">
            <a
              href="../../images/PamelaHammondResumePDF.pdf"
              download
              className="home-button"
            >
              Download Resume
            </a>
          </button>
          <div>
            <p className="nav-link">About Me</p>
            <h6 className="about-paragraph">
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
            </h6>
            <br />
            <h6 className="about-paragraph">
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

export default NameCard;
