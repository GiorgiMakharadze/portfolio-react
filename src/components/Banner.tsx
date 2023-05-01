import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import HeaderImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);

  const toRotate = ["Full-Stack", "Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animated__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Giorgi Makharadze`}
                    <span className="wrap"> {text}</span>
                  </h1>
                  <span>
                    I'm Self-taught developer. studied programming for 8 months
                    and started my first gig. Continuing to broaden my knowledge
                    while working on small and medium-sized projects as a
                    freelancer. I'm using React/Next.js for Front-end and
                    Node.js for Back-end to solve the problems you got!
                  </span>
                  <button>
                    <a
                      href="mailto:makharadzegiorgi00@gmail.com?subject=Subject%20Line"
                      className="connect"
                    >
                      Let's connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
