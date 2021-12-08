import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import apolloImg from "./assets/skills/apollo.png";
import bootstrapImg from "./assets/skills/bootstrap.png";
import cssImg from "./assets/skills/css.png";
import expressImg from "./assets/skills/express.png";
import gitImg from "./assets/skills/git.png";
import githubImg from "./assets/skills/github.png";
import graphqlImg from "./assets/skills/graphql.png";
import handlebarsImg from "./assets/skills/handlebars.png";
import herokuImg from "./assets/skills/heroku.png";
import htmlImg from "./assets/skills/html-5.png";
import insomniaImg from "./assets/skills/insomnia.png";
import javaScriptImg from "./assets/skills/javascript.png";
import jestImg from "./assets/skills/jest.png";
import jqueryImg from "./assets/skills/jquery.png";
import materialuiImg from "./assets/skills/material-ui.png";
import mongodbImg from "./assets/skills/mongodb.png";
import mongooseImg from "./assets/skills/mongoose.png";
import mysqlImg from "./assets/skills/mysql.png";
import nodeImg from "./assets/skills/node-js.png";
import npmImg from "./assets/skills/npm.png";
import reactImg from "./assets/skills/react.png";
import restfulapiImg from "./assets/skills/restful-api.png";
import sequelizeImg from "./assets/skills/sequelize.png";
import visualstudiocodeImg from "./assets/skills/visual-studio-code.png";

const Skills = () => {
  return (
    <div id="skills">
      <ImageList variant="masonry" cols={4} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Skills;

const itemData = [
  {
    img: apolloImg,
    title: "Apollo",
  },
  {
    img: bootstrapImg,
    title: "Bootstrap",
  },
  {
    img: cssImg,
    title: "CSS",
  },
  {
    img: expressImg,
    title: "Express",
  },
  {
    img: gitImg,
    title: "Git",
  },
  {
    img: githubImg,
    title: "GitHub",
  },
  {
    img: graphqlImg,
    title: "GraphQL",
  },
  {
    img: handlebarsImg,
    title: "Handlebars",
  },
  {
    img: herokuImg,
    title: "Heroku",
  },
  {
    img: htmlImg,
    title: "HTML",
  },
  {
    img: insomniaImg,
    title: "Insomnia",
  },
  {
    img: javaScriptImg,
    title: "JavaScript",
  },
  {
    img: jestImg,
    title: "Jest",
  },
  {
    img: jqueryImg,
    title: "jQuery",
  },
  {
    img: materialuiImg,
    title: "Material UI",
  },
  {
    img: mongodbImg,
    title: "MongoDB",
  },
  {
    img: mongooseImg,
    title: "Mongoose",
  },
  {
    img: mysqlImg,
    title: "MySQL",
  },
  {
    img: nodeImg,
    title: "Node",
  },
  {
    img: npmImg,
    title: "NPM",
  },
  {
    img: reactImg,
    title: "React",
  },
  {
    img: restfulapiImg,
    title: "Restful API",
  },
  {
    img: sequelizeImg,
    title: "Sequelize",
  },
  {
    img: visualstudiocodeImg,
    title: "Visual Studio Code",
  },
];
