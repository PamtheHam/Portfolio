import React from "react";
import PHResume from "./assets/PamelaHammondResume.pdf";
import PamHeadshot from "./assets/Headshot.jpg";
import Education from "./Education";
import Skills from "./Skills";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const About = () => {
  return (
    <>
      <div className="about-me">
        <div className="photo-container">
          <div className="figure">
            <figure>
              <img src={PamHeadshot} className="headshot rounded" />
              <figcaption className="figure-caption">Pamela Hammond</figcaption>
            </figure>
          </div>
        </div>

        <div className="intro-container">
          <div className="intro-div">
            <p className="about-title">Full Stack Web Developer</p>
            <p>
              <a
                href="mailto:hammondpamelac@gmail.com"
                className="resume-button"
              >
                <span className="title-links">Hammondpamelac@gmail.com</span>
              </a>{" "}
              |{" "}
              <a
                href={PHResume}
                rel="noreferrer"
                target="_blank"
                className="resume-button"
                download="PamelaHammondResume"
              >
                <span className="title-links">Resume</span>
              </a>
            </p>
            <p className="about-paragraph">
              After working within technology in higher education, I developed
              an interest in programming and completed the University of North
              Carolina at Chapel Hill Coding Bootcamp for Full Stack Web
              Development. Experience in HTML, CSS, JavaScript, Express.js,
              NoSQL, MongoDB, React.js and more. I enjoy being challenged and
              consider myself a lifelong student. Looking for the perfect match
              with a company that will test and further my knowledge of web
              development.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <Grid container>
          <Grid item md>
            <Skills />
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item md>
            <Education />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
