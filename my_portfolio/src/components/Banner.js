// @ts-nocheck
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";




export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["PHP Developer", "React Developer", "Laravel Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 -Math.random() * 100);
  const period = 2000;
  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta )

    return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
      }

       if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
       } else if (isDeleting && updatedText === "") {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(500);
       }
    }

  return (
    <section className="banner" id="home">
       <Container>
          <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hello my name is Arie, and I am a `} <span className="wrap">{text}</span></h1>
                <p>I am a very passionate software developer that loves to learn new cool things. I also love creating new things from small bits of code to big projects of many months.</p>
                <button onClick={() => console.log("connect deez")}>Let's talk <ArrowRightCircle size={25}/></button>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt="Header Img"/>
              </Col>
          </Row>
       </Container>
    </section>
  )
}