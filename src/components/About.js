import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RafaFlowers from "./assets/RafaFlowers.jpg";
import PusheenSleeping from "./assets/PusheenSleeping.jpg";
import PamSmiles from "./assets/PamSmiles.jpg";
import PamChris from "./assets/PamChris.jpg";

const AboutMe = () => {
  return (
    <>
      <Container className="about-section">
        <Container className="greeting-div">
          <Row className="my-intro">
            <Col sm="8" className="text-center about-padding">
              <h2>Nice to meet you. My name is Pam.</h2>
            </Col>
            <Col sm="4" className="about-padding">
              <figure>
                <img
                  alt="Pamela Hammond"
                  src={PamSmiles}
                  className="about-pics"
                />
              </figure>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="my-intro">
            <div className="text-center">
              <h6>
                After working within technology in higher education, and a few
                courses on Codecademy.com, I developed an interest in
                programming and completed the University of North Carolina -
                Chapel Hill’s Coding Bootcamp.
              </h6>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="my-intro">
            <Col className="about-padding">
              <figure>
                <img src={RafaFlowers} className="about-pics" />
              </figure>
            </Col>
            <Col className="about-padding">
              <figure>
                <img src={PamChris} className="about-pics" />
              </figure>
            </Col>
            <Col className="about-padding">
              <figure>
                <img src={PusheenSleeping} className="about-pics" />
              </figure>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="my-intro">
            <div className="text-center">
              <h6>
                Outside of my professional roles, I enjoy spending time with my
                husband Chris, my long-haired chihuahua Rafa, and my chartreux
                cat Pusheen. I have a range of hobbies, including playing
                tennis, solving jigsaw and crossword puzzles, curating Pinterest
                boards, and learning new programming skills.
              </h6>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default AboutMe;
