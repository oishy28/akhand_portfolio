import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ScrollDown from "./ScrollDown";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={10} className="home-header">
              <h1 style={{ paddingBottom: 30 }} className="heading">
                Hi There Everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is <strong className="main-name"> OISHY FATEMA AKHAND</strong> . I am 3rd year student at <strong className="main-name"> Islamic University of Technology . I am 
                <br/>also a</strong> <br />
              </h1>

              <div style={{ padding: 30, textAlign: "center" ,fontSize: 25}}>
                <Type />
              </div>
            </Col>
          </Row>
          <Row>
          <ScrollDown />
          </Row>
        </Container>

      </Container>
      

      <Home2 />
    </section>
  );
}

export default Home;
