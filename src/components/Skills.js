import React from "react";
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

const Skills = () => {
  const frontEnd = (
    <div>
      <h4>Front End</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Handlebars.js</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>Materialize</li>
        <li>Material UI</li>
      </ul>
    </div>
  );

  const backEnd = (
    <div>
      <h4>Back End</h4>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>GraphQL</li>
        <li>NoSQL</li>
        <li>MySQL</li>
        <li>Jest</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Sequelize</li>
      </ul>
    </div>
  );
  return (
    <div>
      <div>
        <h2>&lt;Skills&gt;</h2>
        <div>
          <Grid container>
            <Grid item xs>
              {frontEnd}
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs>
              {backEnd}
            </Grid>
          </Grid>
        </div>
        <h2>&lt;/Skills&gt;</h2>
      </div>
    </div>
  );
};

export default Skills;
