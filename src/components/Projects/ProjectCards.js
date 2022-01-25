import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProjectCards = (props) => {
  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button
            className="portfolio-btn"
            href={props.link}
            style={{ color: "black" }}
            target="_blank"
          >
            View Project
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectCards;
