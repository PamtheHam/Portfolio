import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function WorkDaySchedulerCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 820 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="620"
            image={process.env.PUBLIC_URL + "/images/WorkDayScheduler.png"}
            alt="Project Work Day Scheduler"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://pamtheham.github.io/Work-Day-Scheduler/">
                Work Day Scheduler on GitHub
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In this project, I modified starter code on a simple calendar
              application that allows a user to save events for each hour of the
              standard work day. This app will run in the browser and feature
              dynamically updated HTML and CSS powered by jQuery and Bootstrap.
              When the user interacts with the page, they can input text into a
              timeblock which will save the input and hour of the timeblock in
              local storage. Each timeblock is color coded so that past hours
              are grey, present hours are red, and future hours are green.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
