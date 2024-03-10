import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import projects from "./projects";

export default function Projects () {
    console.log(projects);
    const projectLink = (link) => {
        window.location.href = link
    }
  
    return (
        <Stack gap={3} style={{ alignItems: "center" }}>
        {projects.map( (project) => (
            <Card style={{ width: '70%', marginTop: '30px' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>{project.name}</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                {project.description}
              </Card.Text>
              <div className="d-flex justify-content-center">
          <Button onClick={(e) => {
            e.preventDefault();
            projectLink(project.link);
          }}>Go to site</Button>
        </div>
            </Card.Body>
          </Card>
        ))}    
        </Stack>
    )
}