import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} alt={title} />
        <div className="proj-txtx">
          <a href={url} className="link">
            {title}
          </a>
          <br />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
export default ProjectCard;
