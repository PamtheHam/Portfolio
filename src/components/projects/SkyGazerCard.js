import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function SkyGazerCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 950 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={process.env.PUBLIC_URL + "/images/SkyGazer.png"}
            alt="Project Sky Gazer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://pamtheham.github.io/Password-Generator/">
                Sky Gazer on GitHub
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In this project, I and 3 individuals used Javascript, HTML, and
              CSS to create Sky Gazer. In Sky Gazer, the user will input a
              location and choose one satellite, among a list of satellites, and
              the site will return the time and dates for the next fly over for
              the course of the next seven days, and will pair with weather data
              to determine if the user will be able to see the satellite when it
              flies over in their chosen location.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
