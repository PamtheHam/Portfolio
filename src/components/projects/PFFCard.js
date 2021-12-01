import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function PFFCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="620"
            image={process.env.PUBLIC_URL + "/images/PFF.png"}
            alt="Project Platonic Friends Forever"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://pfforever.herokuapp.com">
                Platonic Friends Forever on Heroku
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A simple way to meet like-minded people in your area, PFF matches
              people based on their shared interests. Whether you like to attend
              major-league baseball games or play video games, this full-stack
              application helps you find your Platonic Friends Forever. (Still
              in progress!)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
