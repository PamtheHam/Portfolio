import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function ReactTaskTrackerCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="650"
            image={process.env.PUBLIC_URL + "/images/ReactTaskTracker.png"}
            alt="Project React Task Tracker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://pamtheham-task-tracker.herokuapp.com/">
                React Task Tracker on Heroku
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This task tracker was created using React and is deployed on
              Heroku. This application allows a user to save the title and day
              and time of a task and select the option to set a reminder. If the
              user selects the option to set a reminder, their task is saved in
              the form with a green bar. If the user does not select the option
              to set a reminder, the task is saved in the form without a green
              bar.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
