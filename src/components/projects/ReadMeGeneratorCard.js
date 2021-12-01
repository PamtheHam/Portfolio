import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

export default function ReadMeGeneratorCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 610 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="470"
            image={process.env.PUBLIC_URL + "/images/ReadMeGenerator.png"}
            alt="Project README Generator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <a href="https://github.com/PamtheHam/README-Generator">
                README Generator on GitHub
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is an application that uses the Inquirer NPM. The inquirer
              NPM utilizes the command line to prompt the user to answer
              questions. The README generator asks the user to input information
              about a project, and then the README generator creates a new
              README.md file and sticks the users input into that file.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
