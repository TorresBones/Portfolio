import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer">
                    <h3>Developed by Jonathan Torres Bones</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="socialmedia-icons">
                            <a
                            href="https://github.com/TorresBones"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="socialmedia-icons">
                            <a
                            href="https://twitter.com/JohnnyTW10"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="socialmedia-icons">
                            <a
                            href="https://www.instagram.com/jtorresbones/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;