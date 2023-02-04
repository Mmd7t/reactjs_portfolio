import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frondend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
