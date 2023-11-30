/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import "../Banner/Banner.css";

function Banner() {
  return (
    <>
      <section id="banner">
        <Container>
          <div className="row">
            <div className="col-lg-5 offset-lg-7">
              <article>
                <h1 className="heading">Hello my name is Jessy Jane.</h1>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </article>
              <a href="/" className="button">
                About Me
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Banner;
