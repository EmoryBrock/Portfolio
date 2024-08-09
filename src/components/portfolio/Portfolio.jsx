import React from "react";
import "./portfolio.css";
import PortfolioCard from "./PortfolioCard";
import { data } from "../../assets/data-portfolio";

export default function Portfolio() {
  const sortedData = [...data].sort((a,b) => b.id - a.id)

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {sortedData.map(project => (
          <PortfolioCard  key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
}
