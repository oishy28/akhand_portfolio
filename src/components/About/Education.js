import React from "react";
import { Row, Col } from "react-bootstrap";

function Education() {
  return (
    <div className="education-section">
      <h1 className="project-heading">
        <strong className="purple">Education</strong>
      </h1>
      <Row >
        <Col md={4}>
          <h2 className="education-title">Islamic University of Technology (IUT)</h2>
          <p className="education-info">
            Boardbazar, Gazipur, Bangladesh<br/>
            Department: Computer Science and Engineering<br/>
            2021-2025<br/>
            Program: BSc in Software Engineering<br/>
            Current CGPA: 3.58 out of 4.00<br/>
            Estimated passing year: 2025
          </p>
        </Col>
        <Col md={4}>
          <h2 className="education-title">Rajshahi College</h2>
          <p className="education-info">
            Rajshahi, Bangladesh<br/>
            Higher Secondary (Science)<br/>
            GPA: 5.00<br/>
            2018-2020
          </p>
        </Col>
        <Col md={4}>
          <h2 className="education-title">Govt. PN Girls’ High School</h2>
          <p className="education-info">
            Rajshahi, Bangladesh<br/>
            Secondary School Certificate (Science)<br/>
            GPA: 5.00<br/>
            2016-2018
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
