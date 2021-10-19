import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/Banner/Banner1.jpg';
import banner2 from '../../../images/Banner/Banner2.jpg';
import banner3 from '../../../images/Banner/Banner3.jpg';


const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4><strong className="text-dark">Popular Healthcare .LTD</strong></h4>
            <br />
            <br />
            <h5 className="text-dark fw-bold">Correct diagnosis is half the success. <br />We do our best for you and your health </h5>
            <Link to={``}>
              <button className="btn btn-light text-success fw-bold">About Us</button>
            </Link>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4><strong className="text-dark">Popular Healthcare .LTD</strong></h4>
            <br />
            <br />
            <h5 className="text-dark fw-bold">Correct diagnosis is half the success. <br />We do our best for you and your health </h5>
            <Link to={``}>
              <button className="btn btn-light text-success fw-bold">About Us</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4><strong className="text-dark">Popular Healthcare .LTD</strong></h4>
            <br />
            <br />
            <h5 className="text-dark fw-bold">Correct diagnosis is half the success. <br />We do our best for you and your health </h5>
            <Link to={``}>
              <button className="btn btn-light text-success fw-bold">About Us</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div >
  );
};

export default Banner;