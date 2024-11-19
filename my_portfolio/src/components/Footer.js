// @ts-nocheck
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/arie-kharamany-04103a269/'><img src={navIcon1} alt=""/></a>
              <a href='https://github.com/ArieKh33'><img src={navIcon2} alt=""/></a>
              <a href='mailto:akharamany04@gmail.com'><img src={navIcon3} alt=""/></a>
            </div>
            <p>Made by: Arie Kharamany</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
