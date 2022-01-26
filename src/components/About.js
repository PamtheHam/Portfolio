import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RafaFlowers from "./assets/RafaFlowers.jpg";
import PusheenSleeping from "./assets/PusheenSleeping.jpg";
import PamSmiles from "./assets/PamSmiles.jpg";
import PamChris from "./assets/PamChris.jpg";
import VisionBoard from "./assets/VisionBoard.png";

const AboutMe = () => {
  return (
    <>
      <Container className="about-section">
        <Container className="greeting-div">
          <Row className="my-intro-2">
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
              <h5>
                After working within technology in higher education, and a few
                courses on Codecademy.com, I developed an interest in
                programming and completed the University of North Carolina -
                Chapel Hill’s Coding Bootcamp.
              </h5>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="my-intro">
            <Col className="about-padding">
              <figure>
                <img
                  src={RafaFlowers}
                  alt="A chihuahua sniffing a purple bed of flowers"
                  className="about-pics"
                />
              </figure>
            </Col>
            <Col className="about-padding">
              <figure>
                <img
                  src={PamChris}
                  alt="Pamela Hammond and her husband Chris Hammond"
                  className="about-pics"
                />
              </figure>
            </Col>
            <Col className="about-padding">
              <figure>
                <img
                  src={PusheenSleeping}
                  alt="A grey cat sleeping on a chair"
                  className="about-pics"
                />
              </figure>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="my-intro">
            <div className="text-center">
              <h5>
                Outside of my professional roles, I enjoy spending time with my
                husband Chris, my long-haired chihuahua Rafa, and my chartreux
                cat Pusheen. I have a range of hobbies, including playing
                tennis, solving jigsaw and crossword puzzles, curating Pinterest
                boards, and learning new programming skills.
              </h5>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="my-intro">
            <div className="text-center">
              <h2 className="vision-board-text">A Woman with a Vision</h2>
              <figure>
                <img
                  src={VisionBoard}
                  alt="vision board"
                  className="vision-board"
                />
              </figure>
            </div>
            <div className="text-center vision-board-paragraph">
              <h5 className=" vision-board-text">
                My 2022 vision board is all about health, wellness, and growth.
                Each picture represents a specific goal that I aspire to
                accomplish by the year's end. I created this vision board as
                inspiration for becoming a better version of myself. In all
                facets of my life, I will be asking myself the question "Does
                this support the life I am trying to create?"
              </h5>
              <h5 className=" vision-board-text">My top three goals are:</h5>
              <ol>
                <li>Eat more nutritious foods</li>
                <li>
                  Spend more <em>quality</em> time with my loved ones
                </li>
                <li>Create new challenging projects</li>
              </ol>
              <h5 className=" vision-board-paragraph">
                Can you guess what the rest of my goals are?
              </h5>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AboutMe;
