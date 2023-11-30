/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../HireMe/HireMe.css";

function HireMe() {
  return (
    <>
      <section id="hireMe">
        <Container>
          <div>
            <h2>I Am Available For Freelance</h2>
            <div>
              <Link className="button">Hire Me Now</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HireMe;
