import React from "react";
import { CustomButton } from "../customButton";
import image from "../../images/image.jpg";

import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">Juan Diego Velasco Solano</h2>

      <article className="about__card">
        <span className="about__image">
          <img src={image} alt="me" />
        </span>
        <span className="about__info">
          <p>
            I'm a mechatronical engineer on his web development learning
            process.
          </p>
          <br />
          <p>
            During this course i have learned how to implement projects and use
            3 main tools to achieve that, such as:
          </p>
          <br />
          <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>GitHub</li>
          </ul>
          <br />
          <p>
            <strong>Contact information:</strong> juandiegovelsol@gmail.com
          </p>
          <br />
          <a href="https://github.com/juandiegovelsol">
            Visit my github profile
          </a>
          <br />
          <CustomButton route="" text="Back to Store" />
        </span>
      </article>
    </section>
  );
};

export default About;
