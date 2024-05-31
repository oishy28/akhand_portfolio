import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Oishy_Fatema_Akhand_cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./ResumeNew.css";
import Resume from "./Resume_Oishy";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  




  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center" style={{ position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row><Resume /></Row>
        
      </Container>
    </div>
  );
}

export default ResumeNew;
