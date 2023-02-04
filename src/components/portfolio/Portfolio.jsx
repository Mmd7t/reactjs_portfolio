import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "This a portfolio item title",
  },
  {
    id: 2,
    img: IMG2,
    title: "This a portfolio item title",
  },
  {
    id: 3,
    img: IMG3,
    title: "This a portfolio item title",
  },
  {
    id: 4,
    img: IMG4,
    title: "This a portfolio item title",
  },
  {
    id: 5,
    img: IMG5,
    title: "This a portfolio item title",
  },
  {
    id: 6,
    img: IMG6,
    title: "This a portfolio item title",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, img, title }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__image">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a href="http://github.com" target="_blank" className="btn">
                  Github
                </a>
                <a
                  href="http://dribbble.com"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
