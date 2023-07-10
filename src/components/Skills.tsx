import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import atom from "../assets/img/atom.png";
import nodejs from "../assets/img/nodejs.png";
import nextjs from "../assets/img/nextjs.png";
import expressjs from "../assets/img/expressjs.png";
import mongodb from "../assets/img/mongodb.png";
import mongoose from "../assets/img/mongoose.png";
import postgresql from "../assets/img/postgresql.png";
import typescript from "../assets/img/typescript.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.png";
import sass from "../assets/img/sass.png";
import redux from "../assets/img/redux.png";
import materialUI from "../assets/img/materialUI.png";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container />
      <Row>
        <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              <span className="skills-header">Programming Languages:</span>{" "}
              HTML, CSS, JavaScript, TypeScript{" "}
              <span className="skills-header">Libraries:</span> React.js{" "}
              <span className="skills-header">Frameworks:</span> Next.js,
              Node.js, Express.js{" "}
              <span className="skills-header">Databases:</span> MongoDb,Mongoose{" "}
              <span className="skills-header">Styling & UI:</span> Sass,
              MaterialUI, Bootstrap.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <img src={atom} alt="image" />
                <h5>React.js</h5>
              </div>
              <div className="item">
                <img src={nodejs} alt="image" />
                <h5>Node.js</h5>
              </div>
              <div className="item">
                <img src={nextjs} alt="image" />
                <h5>Next.js</h5>
              </div>
              <div className="item">
                <img src={expressjs} alt="image" />
                <h5>Express.js</h5>
              </div>
              <div className="item">
                <img src={mongodb} alt="image" />
                <h5>MongoDb</h5>
              </div>
              <div className="item">
                <img src={mongoose} alt="image" />
                <h5>Mongoose</h5>
              </div>
              <div className="item">
                <img src={postgresql} alt="image" />
                <h5>Postgresql</h5>
              </div>
              <div className="item">
                <img src={typescript} alt="image" />
                <h5>TypeScript</h5>
              </div>
              <div className="item">
                <img src={redux} alt="image" />
                <h5>Redux</h5>
              </div>
              <div className="item">
                <img src={js} alt="image" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={html} alt="image" />
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src={css} alt="image" />
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src={sass} alt="image" />
                <h5>Sass</h5>
              </div>
              <div className="item">
                <img src={materialUI} alt="image" />
                <h5>MaterialUI</h5>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
export default Skills;
