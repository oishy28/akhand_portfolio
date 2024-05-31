import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/educast.png";
import editor from "../../Assets/resumetrics.png";
import chatify from "../../Assets/plasmaplus.png";
import bitsOfCode from "../../Assets/cyber.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few academic projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Plasma Plus" 
              description="A web platform facilitating connections between blood donors and recipients, enabling users to browse and
              register for blood donation opportunities. Additionally, it features an admin panel for user management.Technologies Used: HTML, CSS, JavaScript, PHP, MySQL."
              ghLink="https://github.com/ShadmanSakib44/Plasma-Plus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cyber Memoirs"
              description="My personal server-based CTF blog page .Technologies Used: HTML, CSS (Frontend), Node.js, MongoDB. (Backend), Multer (for file handling).              "
              ghLink="https://github.com/oishy28/Cyber_Memoirs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ResuMetrics"
              description="A job recruitment website with an integrated resume builder.Technologies Used: MERN Stack,Cloudinary for file handling."
              ghLink="https://github.com/ShadmanSakib44/ResuMetrics"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Educast"
              description="An innovative website for connecting educators and students with blog posting, tutoring, video conferencing
              and messaging functionalities. Technologies Used: MERN Stack, Agile Methodologies, Jitsi Meet API for video conferencing functionality."
              ghLink="https://github.com/ShadmanSakib44/EduCast-"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
