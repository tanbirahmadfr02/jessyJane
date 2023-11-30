/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import "../Service/Service.css";
import { BsLaptop } from "react-icons/bs";
import {
  FaRegObjectGroup,
  FaRegPaperPlane,
  FaRegComments,
} from "react-icons/fa";
import { BiHdd, BiLineChart } from "react-icons/bi";

function Service() {
  return (
    <>
      <section id="service">
        <Container>
          <div className="content">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="sectionHeading text-center text-white">
                  <h2 className="heading text-white">Our Services</h2>
                  <p className="paragraph text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <article className="artTop">
                  <div className="left">
                    <div className="circle">
                      <BsLaptop className="icon" />
                    </div>
                  </div>
                  <div className="text">
                    <h4>Website Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="left">
                    <div className="circle">
                      <FaRegObjectGroup className="icon" />
                    </div>
                  </div>
                  <div className="text">
                    <h4>Visual Editor</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6">
                <article className="artTop">
                  <div className="left">
                    <div className="circle">
                      <FaRegPaperPlane className="icon" />
                    </div>
                  </div>
                  <div className="text">
                    <h4>Email Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="left">
                    <div className="circle">
                      <BiHdd className="icon" />
                    </div>
                  </div>
                  <div className="text">
                    <h4>Backup & Security</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-lg-4">
                <div className="art_main">
                  <article className="artTop">
                    <div className="left">
                      <div className="circle">
                        <BiLineChart className="icon" />
                      </div>
                    </div>
                    <div className="text">
                      <h4>Digital Analytics</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </article>
                  <article>
                    <div className="left">
                      <div className="circle">
                        <FaRegComments className="icon" />
                      </div>
                    </div>
                    <div className="text">
                      <h4>Backup IT Consultancy</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Service;
