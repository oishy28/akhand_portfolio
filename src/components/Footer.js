import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
        <Col md="15" className="footer-copywright">
          <h3>Copyright © {year} Oishy Fatema Akhand</h3>
        </Col>

          
    </Container>
  );
}

export default Footer;
