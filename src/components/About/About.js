import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Education from "./Education";

function About() {
  return (
    <Container fluid className="about-section">
        <Education />
      <Particle />
      <Container>
        <h1 className="project-heading" color="black">
          My <strong className="purple"> Technical Skills </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
