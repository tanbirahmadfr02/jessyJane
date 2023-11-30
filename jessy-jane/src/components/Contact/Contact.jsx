/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import contact from "../Contact/contact.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImMobile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <>
      <section id="contact">
        <Container>
          <div className="heading_area">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="heading text-center">Contact Us</h2>
                <p className="paragraph text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <input
                  className="form-control mb-4"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="form-control mb-4"
                  placeholder="Your Email"
                  type="Email"
                />
                <input
                  className="form-control"
                  placeholder="Your Phone"
                  type="text"
                />
              </div>
              <div className="col lg-6 col-md-6">
                <textarea
                  className="from-control message"
                  placeholder="Message"
                  cols="60"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <Link className="button">Submit</Link>
            </div>
          </form>
          <div className="address">
            <div className="row">
              <div className="col-lg-4 col-sm-4">
                <div className="phone">
                  <div className="icon">
                    <ImMobile />
                  </div>
                  <h4>Call Us</h4>
                  <p className="paragraph">(208) 333 9296</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="phone">
                  <div className="icon">
                    <FaHome />
                  </div>
                  <h4>Visit Office</h4>
                  <p className="paragraph">Collins Street West, London, UK</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4">
                <div className="phone">
                  <div className="icon">
                    <IoMdMail />
                  </div>
                  <h4>Email Us</h4>
                  <p className="paragraph">contact@jess-template.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
