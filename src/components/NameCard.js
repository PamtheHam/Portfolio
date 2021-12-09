import React from "react";
import PHResume from "./assets/PHResume.pdf";
import PamHeadshot from "./assets/Headshot.jpg";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <figure>
        <img src={PamHeadshot} className="headshot rounded" />
        <figcaption className="namecard">Pamela Hammond</figcaption>
      </figure>

      <div className="about-section">
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
          </a>
        </h5>
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
        <Education />
        <br />
        <Skills />
      </div>
    </>
  );
};

export default About;
