/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'react-bootstrap'
import footer from '../Footer/Footer.css'
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <section id='footer'>
        <Container>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <p className='paragraph text-white'>© Copyright 2020 - Designed by <span>Tanbir Ahmad FR</span></p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="icons">
                        <Link className="icon"><FaFacebookF/></Link>
                        <Link className="icon"><FaTwitter/></Link>
                        <Link className="icon"><FaLinkedinIn/></Link>
                        <Link className="icon"><FaGooglePlusG/></Link>
                        <Link className="icon"><FaRss/></Link>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Footer