// @ts-nocheck
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/logo.svg";

function BasicExample() {
const [activeLink, setActiveLink] = useState("home");
const [scrolled, seScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
}, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={} alt="logo"/>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href='#'><img src={} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}><span>Let's Connect</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;