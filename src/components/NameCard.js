import React from "react";
import PHResume from "./assets/PHResume.pdf";
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
          at Chapel Hill Coding Bootcamp for Full Stack Web Development.
          Experience in HTML, CSS, JavaScript, Node.js, Express.js, MySQL,
          NoSQL, MongoDB, React.js and more. I enjoy being challenged and
          consider myself a lifelong student. Looking for the perfect match with
          a company that will test and further my knowledge of web development.
        </h6>
        <br />
        <div>
          <div>
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
        </div>
      </div>
    </>
  );
};

export default About;
