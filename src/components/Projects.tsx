import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ecomerceapi from "../assets/img/projects/ecomerceapi.png";
import fullstack from "../assets/img/projects/fullstack.png";
import jobify from "../assets/img/projects/jobify.png";
import jobsapi from "../assets/img/projects/jobsapi.png";
import brandshop from "../assets/img/projects/brandshop.png";
import omnifood from "../assets/img/projects/omnifood.png";
import starwars from "../assets/img/projects/starwars.png";
import taskmanager from "../assets/img/projects/taskmanager.png";
import taskmanager2 from "../assets/img/projects/taskmanage2.png";
import fileupload from "../assets/img/projects/fileupload.png";

const projectsFrontEnd = [
  {
    title: "Omnifood",
    description: "Front-end Development",
    imageUrl: omnifood,
    url: "https://main--gleaming-biscotti-489215.netlify.app/",
  },

  {
    title: "Star wars",
    description: "Front-end Development",
    imageUrl: starwars,
    url: "https://main--benevolent-marzipan-696850.netlify.app/",
  },
  {
    title: "Brand shop e-commerce",
    description: "Front-end Development",
    imageUrl: brandshop,
    url: "https://brand-shop.onrender.com/",
  },
];

const projectsBackEnd = [
  {
    title: "Jobs-API",
    description: "Back-end Development",
    imageUrl: jobsapi,
    url: "https://jobs-api-d3kj.onrender.com/",
  },
  {
    title: "E-commerce-API",
    description: "Back-end Development",
    imageUrl: ecomerceapi,
    url: "https://e-comerce-api-asqa.onrender.com/",
  },
  {
    title: "File uploader",
    description: "Back-end Development",
    imageUrl: fileupload,
    url: "https://file-image-upload-diiv.onrender.com",
  },
];

const projectsFullStack = [
  {
    title: "Full Auth Form",
    description: "Full-stack Development",
    imageUrl: fullstack,
    url: "https://full-auth-form-nextjs-typescript.vercel.app/auth",
  },
  {
    title: "Jobify",
    description: "Full-stack Development",
    imageUrl: jobify,
    url: "https://jobify-n7gx.onrender.com/landing",
  },
  {
    title: "Task Manager",
    description: "Full-stack Development",
    imageUrl: taskmanager2,
    url: "https://task-manager-api-s4rx.onrender.com/index.html",
  },
];

const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Leveraging my experience as a Full Stack Developer, I have
              successfully delivered various types of projects across diverse
              industries. My proficiency in front-end development with React.js
              and Next.js, coupled with my expertise in back-end development
              using Node.js and Express.js, enables me to excel in the MERN
              stack.{" "}
              <span className="skills-header">
                To see all my projects, visit{" "}
                <a
                  href="https://github.com/GiorgiMakharadze"
                  className="github-link"
                >
                  GitHub
                </a>
              </span>
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Back-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Full-Stack</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsFrontEnd.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsBackEnd.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsFullStack.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
export default Projects;
