import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faExternalLinkAlt,
  faUsers,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'status-live';
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-progress';
      default:
        return 'status-default';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Research':
        return 'category-research';
      case 'Web Application':
        return 'category-web';
      case 'System Programming':
        return 'category-system';
      case 'Game Development':
        return 'category-game';
      case 'Physics':
        return 'category-physics';
      case 'Recommendation System':
        return 'category-recommendation';
      case 'Simulation':
        return 'category-simulation';
      case 'AI':
        return 'category-ai';
      case 'Machine Learning':
        return 'category-ml';
      case 'Education':
        return 'category-education';
      case 'Version Control':
        return 'category-version-control';
      case 'Java':
        return 'category-java';
      case 'Mathematical Modeling':
        return 'category-math';
      default:
        return 'category-default';
    }
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-meta">
          <span className={`project-status ${getStatusColor(data.status)}`}>
            {data.status}
          </span>
          <div className="project-categories">
            {(data.categories || [data.category]).map((category) => (
              <span
                key={`${data.title}-${category}`}
                className={`project-category ${getCategoryColor(category)}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
              title="View on GitHub"
            >
              <FontAwesomeIcon icon={faCode} />
              <span className="link-text">GitHub/Demo</span>
            </a>
          )}
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link main-link"
              title="View Project"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span className="link-text">View</span>
            </a>
          )}
        </div>
      </div>

      <div className="project-image">
        {data.link ? (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}${data.image}`}
              alt={data.title}
            />
            <div className="project-overlay">
              <div className="project-overlay-content">
                <h3>{data.title}</h3>
                <p className="project-date">{data.date}</p>
              </div>
            </div>
          </a>
        ) : (
          <>
            <img
              src={`${process.env.PUBLIC_URL}${data.image}`}
              alt={data.title}
            />
            <div className="project-overlay">
              <div className="project-overlay-content">
                <h3>{data.title}</h3>
                <p className="project-date">{data.date}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">
          {data.link ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.title}
            </a>
          ) : (
            <span>{data.title}</span>
          )}
        </h3>

        <p className="project-description">{data.desc}</p>

        <div className="project-technologies">
          {data.technologies.map((tech) => (
            <span key={`${data.title}-${tech}`} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <div className="project-team">
            <FontAwesomeIcon
              icon={data.teamSize === 'Solo' ? faUser : faUsers}
              className="team-icon"
            />
            <span className="team-info">
              {data.teamSize === 'Solo' ? 'Solo Project' : data.teamSize}
            </span>
          </div>
          <div className="project-role">
            <span className="role-badge">{data.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    teamSize: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
