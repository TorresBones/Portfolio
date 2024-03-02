import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavColor] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavColor(true);
        } else {
            updateNavColor(false);
        }
    }

    useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
}, []);

    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                </Navbar.Brand>
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    updateExpanded(expand ? false : "expanded");
                }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-bar">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;