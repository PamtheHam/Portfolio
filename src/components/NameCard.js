import React from "react";
import PHResume from "./assets/PHResume.pdf";

const NameCard = () => {
  return (
    <>
      <p className="nav-link">Pamela Hammond</p>
      <div id="about">
        <h5>
          Full Stack Web Developer | Hammondpamelac@gmail.com |{" "}
          <a
            href={PHResume}
            rel="noreferrer"
            target="_blank"
            className="resume-button"
            download="PamelaHammondResume"
          >
            <span>Download Resume</span>
          </a>{" "}
        </h5>
      </div>
      <div>
        <br />
        <h6 className="about-paragraph">
          After working within technology in higher education, I developed an
          interest in programming and completed the University of North Carolina
          - Chapel Hill’s Coding Bootcamp. With excellent attention to detail
          and organizational skills, I am dedicated to building original and
          efficient web applications from start to finish with proficient skills
          in HTML, CSS, and Javascript. I enjoy being challenged and working
          outside of my comfort zone. Looking for the perfect match with a
          company that will test and further my knowledge of web development.
        </h6>
        <br />
      </div>
    </>
  );
};

export default NameCard;
