// @ts-nocheck
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"


export const Projects = () => {
  
  const projects = [
    {
      title: "my first HTML/CSS blog",
      description: "This is where it all started",
      imgUrl: projImg1,
      githubLink: "https://github.com/ArieKh33/First_blog",
    },
    {
      title: "Hangman game",
      description: "It is a small fun little game made with PHP",
      imgUrl: projImg2,
      githubLink: "https://github.com/ArieKh33/Hangman_game_PHP",
    },
    {
      title: "Database website",
      description: "This is my start creating databases with PHP",
      imgUrl: projImg3,
      githubLink: "https://github.com/ArieKh33/Database-menu",
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are a few examples of my projects but if you want to see all of my projects you could find them at my: <a href="https://github.com/ArieKh33">Github</a></p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="mt-4">
                      {
                        projects.map((Project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...Project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="mt-4 bold">More Projects to come</Tab.Pane>
                  <Tab.Pane eventKey="third" className="mt-4 bold">More Projects to come</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}