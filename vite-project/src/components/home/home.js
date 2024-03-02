import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

function Home() {
    return (
        <section>
            <Container fluid className="home-content" id="home">
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hello!
                        </h1>

                        <h1 className="header-name">
                            I'm Jonathan Torres
                        </h1>
                        <div style={{ padding: "50px", textAlign: "left" }}>
                            <Type />
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: "20" }}>
                    </Col>
                </Row>
            </Container>
            </Container>
        </section>
    );
}

export default Home;