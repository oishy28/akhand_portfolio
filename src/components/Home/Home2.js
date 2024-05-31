import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook,  FaEnvelope } from "react-icons/fa";
import "./styles.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.6em", color: "#000" }}>
              Learn More <span className="purple"> ABOUT </span> Me
            </h1>
            <p className="home-about-body" style={{ color: "#000" }}>
              I’m currently enrolled in undergraduate Software Engineering
              (SWE) program under Computer Science and Engineering (CSE) department.  
              <br />
              <i>
                <b className="purple"> I specialize in Frontend
                development, boasting proficiency in HTML, CSS, JavaScript, and React. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  illustration and animation.
                </b>
              </i>
              <br />
              <br />
              My expertise extends to crafting
              compelling user interfaces, leveraging advanced UI design tools such as  <b className="purple">Figma</b>.
              <i>
                <br/>
                I am dedicated to continuous
                learning and have recently started working on a research project that focuses on 
              </i>
              <i>
                <b className="purple">  ML, NLP, and LLM</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" >
            <h1 style={{color: "#000",  fontSize: 20}}>FIND ME ON</h1>
            <p style={{color: "#000"}} >
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/oishy28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oishy-fatema-akhand-5a6366280/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oishyfatema"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100080181855908&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:oishyfatemaakhand@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
