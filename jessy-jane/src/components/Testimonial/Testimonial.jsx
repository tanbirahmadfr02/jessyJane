/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import "../Testimonial/Testimonial.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import testImg1 from "../../assets/testImg1.jpg";
import testImg2 from "../../assets/testImg2.jpg";
import testImg3 from "../../assets/testImg3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <>
      <section id="testimonial">
        <Container>
          <div className="heading_area">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="heading text-center">Testimonials</h2>
                <p className="paragraph text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="test_body">
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="">
                      {" "}
                      <div className="item">
                        <div className="quotes text-center">
                          <BiSolidQuoteLeft className="icon" />
                        </div>
                        <div>
                          <div className="img">
                            <img src={testImg1} alt="img" />
                          </div>
                        </div>
                        <p className="paragraph text-center">
                          I'm always impressed with the services. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <h6>John, Customer</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                      {" "}
                      <div className="item">
                        <div className="quotes text-center">
                          <BiSolidQuoteLeft className="icon" />
                        </div>
                        <div>
                          <div className="img">
                            <img src={testImg2} alt="img" />
                          </div>
                        </div>
                        <p className="paragraph text-center">
                          I'm always impressed with the services. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <h6>Shandra, Customer</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                      {" "}
                      <div className="item">
                        <div className="quotes text-center">
                          <BiSolidQuoteLeft className="icon" />
                        </div>
                        <div>
                          <div className="img">
                            <img src={testImg3} alt="img" />
                          </div>
                        </div>
                        <p className="paragraph text-center">
                          I'm always impressed with the services. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <h6>Michel, Customer</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Testimonial;
