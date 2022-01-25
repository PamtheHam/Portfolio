import React from "react";
import ProjectCards from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import ExpressNoteTakerImg from "../assets/ExpressNoteTaker.png";
import PFFImg from "../assets/PFF.png";
import TaskTrackerImg from "../assets/ReactTaskTracker.png";
import ReadMeImg from "../assets/ReadMeGenerator.png";
import SkyGazerImg from "../assets/SkyGazer.png";
import FitnessTrackerImg from "../assets/FitnessTracker.PNG";
import VodUImg from "../assets/VodU.PNG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">My Recent Works</h1>
        <p style={{ color: "black" }}>
          Here is a sample of my most valued projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ExpressNoteTakerImg}
              title="Express Note Taker"
              description="Use this application to create and save notes so that you can organize your
              thoughts and keep track of tasks that you need to accomplish!"
              link="https://github.com/PamtheHam/Express-Note-Taker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={PFFImg}
              title="Platonic Friends Forever"
              description="A simple way to meet like-minded people in your area, PFF matches people based on their shared interests."
              link="https://pfforever.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={TaskTrackerImg}
              title="React Task Tracker"
              description="This application allows a user to save the title and day
              and time of a task and select the option to set a reminder."
              link="https://pamtheham-task-tracker.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ReadMeImg}
              title="ReadME Generator"
              description="The README generator asks the user to input information about a project, and then the README generator creates a new README.md file and sticks the users input into that file."
              link="https://github.com/PamtheHam/README-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={SkyGazerImg}
              title="Sky Gazer"
              description="In Sky Gazer, the user will input a
              location and choose one satellite, among a list of satellites, and
              the site will return the time and dates for the next fly over for
              the course of the next seven days, and will pair with weather data
              to determine if the user will be able to see the satellite when it
              flies over in their chosen location."
              link="https://pamtheham.github.io/Sky-Gazer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={VodUImg}
              title="VodU"
              description="A social media community where gamers can provide critique and feedback to other players’ video gameplay."
              link="https://vodu2.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={FitnessTrackerImg}
              title="Workout Tracker"
              description="An application that allows the user to create, save, and track workouts."
              link="https://pamtheham-workout-tracker.herokuapp.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
