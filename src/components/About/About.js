import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Aboutcard from "./Aboutcard";

function About() {
    return (
        <Container fluid className="about-section">
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
            md={7}
            style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
            }}
            >
                <h1 style={{ fontsize: "2.1em", paddingBottom: "20px" }}>
                </h1>
                <Aboutcard />
                </Col>
                <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
                >
                </Col>
        </Row>
        <h1 className="project-header">
            Professional
        </h1>

        <h1 className="project-header">
            I use
        </h1>

        <Github />
        </Container>
        </Container>
    );
}

export default About;