/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../assets/about1.jpg";
import img2 from "../../assets/about2.jpg";
import "../About/About.css";

function About() {
  return (
    <>
      <section id="about">
        <Container>
          <div className="row align-items-sm-center">
            <div className="col-lg-6 col-sm-6">
              <div className="imgMain">
                <div className="img1">
                  <img src={img1} alt="image" />
                </div>
                <div className="img2">
                  <img src={img2} alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-sm-6 offset-sm-0">
              <article>
                <h2 className="heading">
                  About <span>Me</span>
                </h2>
                <p className="paragraph">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.{" "}
                </p>
                <a href="/" className="button">
                  Show My Skill
                </a>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
