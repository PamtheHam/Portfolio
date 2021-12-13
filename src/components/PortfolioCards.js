import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ExpressNoteTakerImg from "./assets/ExpressNoteTaker.png";
import PFFImg from "./assets/PFF.png";
import TaskTrackerImg from "./assets/ReactTaskTracker.png";
import ReadMeImg from "./assets/ReadMeGenerator.png";
import SkyGazerImg from "./assets/SkyGazer.png";
import FitnessTrackerImg from "./assets/FitnessTracker.PNG";
import VodUImg from "./assets/VodU.PNG";

const PortfolioCards = () => {
  return (
    <>
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <ImageList className="image-list">
          {itemData.map((item) => (
            <ImageListItem className="single-image" key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
    </>
  );
};

const itemData = [
  {
    img: TaskTrackerImg,
    title: "Task Tracker",
    link: "https://pamtheham-task-tracker.herokuapp.com/",
  },
  {
    img: ExpressNoteTakerImg,
    title: "Express Note Taker",
    link: "https://github.com/PamtheHam/Express-Note-Taker",
  },
  {
    img: PFFImg,
    title: "Platonic Friends Forever",
    link: "https://pfforever.herokuapp.com",
  },
  {
    img: SkyGazerImg,
    title: "Sky Gazer",
    link: "https://pamtheham.github.io/Sky-Gazer/",
  },
  {
    img: FitnessTrackerImg,
    title: "Fitness Tracker",
    link: "https://pamtheham-workout-tracker.herokuapp.com/?id=618998dd53fa23f2d97684bc",
  },
  {
    img: ReadMeImg,
    title: "ReadMe",
    link: "https://github.com/PamtheHam/README-Generator",
  },
  {
    img: VodUImg,
    title: "VodU",
    link: "https://vodu2.herokuapp.com/",
  },
];

export default PortfolioCards;
