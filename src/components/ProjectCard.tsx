import { Col } from "react-bootstrap";
import { IProjectCardProps } from "../../types/projectCardProps";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  url,
}: IProjectCardProps) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} />
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
