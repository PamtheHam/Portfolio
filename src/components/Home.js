import React from "react";
import PHResume from "./assets/PamelaHammondResume.pdf";
import PamHeadshot from "./assets/Headshot.jpg";
import Education from "./Education";
import Skills from "./Skills";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="home-section">
        <Container className="greeting-div">
          <Row className="my-intro-2">
            <Col sm="5" className="about-padding">
              <figure>
                <img
                  src={PamHeadshot}
                  alt="Pamela Hammond"
                  className="headshot"
                />
              </figure>
            </Col>
            <Col sm="7" className="text-center about-padding">
              <div className="intro-links">
                <p className="about-title">Pamela Hammond</p>
                <p className="about-title">Full Stack Developer</p>
                <p>
                  <a
                    href="mailto:hammondpamelac@gmail.com"
                    className="resume-button"
                  >
                    <span className="title-links">
                      Hammondpamelac@gmail.com |
                    </span>
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
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="my-intro">
            <div className="text-center">
              <p className="about-paragraph">
                Dedicated and efficient full stack developer with experience in
                HTML, CSS, JavaScript, Node.js, Express.js, MySQL, NoSQL,
                MongoDB, React.js and more. After working within technology in
                higher education, I developed an interest in programming and
                completed the University of North Carolina at Chapel Hill Coding
                Bootcamp for Full Stack Web Development in 2021. Enjoys being
                challenged and is continuously learning. Eager to find the
                perfect match with a company to excel as a full stack developer.
              </p>
            </div>
          </div>
        </Container>

        <Container className="greeting-div">
          <Row className="my-intro">
            <Col md={5} className="text-center about-padding">
              <Skills />
            </Col>
            <Col md={7} className="text-center about-padding">
              <Education />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
