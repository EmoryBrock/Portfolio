import React, { useState } from "react";


export default function PortfolioCard({project}) {
  const [readMore, setRedMore] = useState(false);

  const extraContent = <div>{project.description}</div>;

  const linkName = readMore ? "Show Less << " : "Show More >> ";

  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={project.img_src} alt={project.img_alt} />
      </div>
      <h3>{project.title}</h3>
      <p>
        {" "}
        <span>{project.type}</span> project using:
      </p>
      <ul className="portfolio__item-techs">
        {project.techList.map((tech, index) => (
            <li key={index} className="portfolio__item-tech">
                {tech}
            </li>
        ))}
      </ul>
      <div className="portfolio__item-description">
        <a
          className="read-more"
          onClick={() => {
            setRedMore(!readMore);
          }}
        >
          {linkName}
        </a>
        {readMore && extraContent}
      </div>
      <div className="portfolio__item-cta">
        <a
          href={project.link_Github}
          className="btn"
          target="_blank"
        >
          Github
        </a>
        <a href={project.link_Demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  );
}
