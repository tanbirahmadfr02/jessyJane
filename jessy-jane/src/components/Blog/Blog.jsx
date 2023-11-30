/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import blog from "../Blog/Blog.css";
import { Container } from "react-bootstrap";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section id="blog">
        <Container>
          <div className="heading_area">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="heading text-center text-white">Our Blog</h2>
                <p className="paragraph text-center text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="blog-body">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="img">
                  <img src={blog1} alt="image" />
                  <div className="shape">
                    <p className="text-white">10 hours ago</p>
                    <p className="text-white">By:10 hours ago</p>
                  </div>
                </div>
                <div className="details">
                  <Link className="blog-link">Better User Interface</Link>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="img">
                  <img src={blog2} alt="image" />
                  <div className="shape">
                    <p className="text-white">10 hours ago</p>
                    <p className="text-white">By:10 hours ago</p>
                  </div>
                </div>
                <div className="details">
                  <Link className="blog-link">Experts Web Design Tips</Link>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shape">
                  <p className="text-white">10 hours ago</p>
                  <p className="text-white">By:10 hours ago</p>
                </div>
                <div className="details">
                  <Link className="blog-link">Importance Of Web Design</Link>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Blog;
