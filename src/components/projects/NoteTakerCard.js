import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function NoteTakerCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 680 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="610"
            image={process.env.PUBLIC_URL + "/images/ExpressNoteTaker.png"}
            alt="Project Express Note Taker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://github.com/PamtheHam/Express-Note-Taker">
                Express Note Taker on GitHub
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created using Express.js, in this project I refactored existing
              code to save and retrieve note data from a JSON file. Use this
              application to create and save notes so that you can organize your
              thoughts and keep track of tasks that you need to accomplish!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
