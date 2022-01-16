import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Container from "@mui/material/Container";
import ExpressNoteTakerImg from "./assets/ExpressNoteTaker.png";
import PFFImg from "./assets/PFF.png";
import TaskTrackerImg from "./assets/ReactTaskTracker.png";
import ReadMeImg from "./assets/ReadMeGenerator.png";
import SkyGazerImg from "./assets/SkyGazer.png";
import FitnessTrackerImg from "./assets/FitnessTracker.PNG";
import VodUImg from "./assets/VodU.PNG";

const PortfolioCards = () => {
  return (
    <Container>
      <div className="projects-container">
        <h1 className="projects-title">Portfolio</h1>
        <ImageList className="image-list">
          {itemData.map((item) => (
            <ImageListItem className="single-image" key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=4 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                className="image-bar"
                subtitle={<a href={item.link}>{item.link}</a>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Container>
  );
};

const itemData = [
  {
    img: TaskTrackerImg,
    title: (
      <a href="https://pamtheham-task-tracker.herokuapp.com/">Task Tracker</a>
    ),
    link: "GitHub Repo: https://github.com/PamtheHam/practice-react-task-tracker",
  },
  {
    img: ExpressNoteTakerImg,
    title: (
      <a href="https://pamtheham.github.io/Express-Note-Taker/">
        Express Note Taker
      </a>
    ),
    link: "GitHub Repo: https://github.com/PamtheHam/Express-Note-Taker",
  },
  {
    img: PFFImg,
    title: (
      <a href="https://pfforever.herokuapp.com">Platonic Friends Forever</a>
    ),
    link: "GitHub Repo: https://github.com/PamtheHam/platonic-friends-forever",
  },
  {
    img: SkyGazerImg,
    title: <a href="https://pamtheham.github.io/Sky-Gazer/">Sky Gazer</a>,
    link: "GitHub Repo: https://github.com/PamtheHam/Sky-Gazer",
  },
  {
    img: FitnessTrackerImg,
    title: (
      <a href="https://pamtheham-workout-tracker.herokuapp.com/">
        Workout Tracker
      </a>
    ),
    link: "GitHub Repo: https://github.com/PamtheHam/Workout-Tracker",
  },
  {
    img: ReadMeImg,
    title: <a href="https://github.com/PamtheHam/README-Generator">ReadMe</a>,
    link: "GitHub Repo: https://github.com/PamtheHam/README-Generator",
  },
  {
    img: VodUImg,
    title: <a href="https://vodu2.herokuapp.com/">VodU</a>,
    link: "GitHub Repo: https://github.com/Copernichris/Final-Project",
  },
];

export default PortfolioCards;
