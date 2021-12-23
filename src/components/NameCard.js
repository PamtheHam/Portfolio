import React from "react";
import PHResume from "./assets/PamelaHammondResume.pdf";
import PamHeadshot from "./assets/Headshot.jpg";
import Education from "./Education";
import Skills from "./Skills";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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
      <Container className="about-me">
        <Box>
          <figure>
            <img src={PamHeadshot} className="headshot rounded" />
          </figure>
        </Box>

        <Container>
          <p className="about-title">
            Pamela Hammond | Full Stack Web Developer
          </p>
          <p>
            <a href="mailto:hammondpamelac@gmail.com" className="resume-button">
              <span className="title-links">Hammondpamelac@gmail.com |</span>
            </a>
            <a
              href={PHResume}
              rel="noreferrer"
              target="_blank"
              className="resume-button"
              download="PamelaHammondResume"
            >
              <span className="title-links"> Resume</span>
            </a>
          </p>
        </Container>
      </Container>

      <Container>
        <p className="about-paragraph">
          Dedicated and efficient full stack developer with experience in HTML,
          CSS, JavaScript, Node.js, Express.js, MySQL, NoSQL, MongoDB, React.js
          and more. After working within technology in higher education, I
          developed an interest in programming and completed the University of
          North Carolina at Chapel Hill Coding Bootcamp for Full Stack Web
          Development in 2021. Enjoys being challenged and is continuously
          learning. Eager to find the perfect match with a company to excel as a
          full stack developer.
        </p>
      </Container>

      <Box className="grid-container">
        <Grid container>
          <Grid item md>
            <Skills />
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item md>
            <Education />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
