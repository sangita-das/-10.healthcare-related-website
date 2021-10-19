import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Popular Healthcare</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    High professional doctors level. All specialists have extensive practical experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics, and much more
                  </small>
                </p>

                <p className="mt-5">
                  <small> © 2021 plpular healthcare Inc. All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2 mt-4">
              <div className="footer-menu-container fw-bold">

                <Nav.Link as={HashLink} to="/home#home" className="text-light">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/about#about" className="text-light">About Us</Nav.Link>
                <Nav.Link as={HashLink} to="/services#services" className="text-light">Services</Nav.Link>
                <Nav.Link as={HashLink} to="/doctors#doctors" className="text-light">Doctors</Nav.Link>
                <Nav.Link as={HashLink} to="/contacts#contacts" className="text-light">Contacts</Nav.Link>

              </div>
            </div>


            <div className="col-md-5">
              <div className="right-footer-container">
                <p className="fw-bold">Monday to Saturday:</p>
                <h5>9:00 AM to 6:00 PM</h5>
                <div className="phone d-flex align-items-center justify-content-center mt-4">

                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <p className="fw-bold">24/7 service available</p>
                    <h5>01 800 688 8688</h5>
                    <h6>E-mail: info@p.healthcare.com</h6>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <p className="text-center">
                      © 1996-2021, popular_Healthcare.com, Inc. or its affiliates,
                      <br /> California, 33020;
                      <br /> 685 Lane Drive St.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;