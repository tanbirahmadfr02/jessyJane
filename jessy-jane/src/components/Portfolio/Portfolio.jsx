/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Portfolio/Portfolio.css";
import { Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import gallery from "../Gallery/Gallery";

function Portfolio() {
  const [items, setItems] = useState(gallery);
  const menuItem = (cateItem) => {
    const updatedItem = gallery.filter((currentItem) => {
      return currentItem.category === cateItem;
    });
    setItems(updatedItem);
  };

  return (
    <>
      <section id="portfolio">
        <Container>
          <div className="heading_area">
            <h4>Portfolio</h4>
            <h2 className="heading">I Love What I Do</h2>
          </div>
          <div className="menu">
            <NavLink
              className="menu-link text-white"
              onClick={() => setItems(gallery)}
            >
              All Projects
            </NavLink>
            <Link
              className="menu-link text-white"
              onClick={() => menuItem("illustration")}
            >
              Illustrations
            </Link>
            <Link
              className="menu-link text-white"
              onClick={() => menuItem("mobile")}
            >
              Mobile
            </Link>
            <Link
              className="menu-link text-white"
              onClick={() => menuItem("photography")}
            >
              Photography
            </Link>
            <Link
              className="menu-link text-white"
              onClick={() => menuItem("website")}
            >
              Website
            </Link>
          </div>
          <div className="gallery">
            <div className="row">
              {items.map((elem) => {
                const { id, image, category } = elem;
                return (
                  <>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                      <div className="img">
                        <img src={image} alt="" />
                        <div className="overlay"></div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
