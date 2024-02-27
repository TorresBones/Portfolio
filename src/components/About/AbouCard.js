import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
    return (
        <Card className="quote-card-view">
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                Hello, I'm Jonathan Torres Bones, a passionate web developer with a focus on creating engaging and user-friendly digital experiences. With a certificate and one year of experience in front-end and back-end development, I thrive on turning ideas into reality through code.

                My expertise lies in HTML, CSS, JavaScript, and React, with a keen eye for design and usability. I'm driven by a desire to create elegant solutions to complex problems, always striving to stay updated with the latest technologies and best practices in the industry.

                Outside of coding, I like to be with my family play games with my kids, cook with my wife and go to the movie teather all together. I believe in continuous learning, collaboration, and pushing the boundaries of what's possible.

                I've had the opportunity to work on diverse projects ranging from responsive websites to interactive web applications, each teaching me valuable lessons and fueling my passion for innovation. Whether it's optimizing performance, enhancing accessibility, or crafting pixel-perfect designs, I'm committed to delivering exceptional results that exceed expectations.

                I'm excited to collaborate on new projects and contribute to meaningful initiatives. Let's connect and bring your ideas to life!
                </p>
                <footer className="blockquote-footer">Jonathan</footer>
            </blockquote>
        </Card.Body>
        </Card>
    );
}

export default AboutCard;