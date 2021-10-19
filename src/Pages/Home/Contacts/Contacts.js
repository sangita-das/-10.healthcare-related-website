import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contacts.css'
const Contacts = () => {
  return (
    <section className="contact my-5 py-5 ">
      <h5>Over 250,000 patients already
        trust us and our services.
        We operate at the highest
        standards of care, all for a
        price you can afford.</h5>
      <h4>Healthcare designed around you; <small>Whatever you need, Popular Healthcare has the right solution for you</small> </h4>
      <div className="container me-5 ">
        <div className="section-header text-center text-white mb-5">
          <h2 className="text-warning fw-bold mt-4">Contact</h2>
          <h4 className="text-center fw-bold text-primary">We'd Love To Hear From You!</h4>
          <h1>Leave Your Message Here</h1>
        </div>


        <div className="row d-flex- justify-content-center align-items-center mx-5 px-5">
          <div className="col-md-6 mx-auto  ">

            <div className="col-md-6 ">

              <div className=" contact-info ">
                <p className="fw-bold">Monday to Saturday:</p>
                <h5>9:00 AM to 6:00 PM</h5>
                <div className="phone d-flex align-items-center justify-content-center mt-4">

                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <p className="fw-bold">24/7 service available</p>
                    <br />
                    <h5>Call Now:</h5>
                    <h5>01 800 688 8688</h5>
                    <h6>E-mail: info@p.healthcare.com</h6>
                  </div>
                </div>
                <br />
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <h6 className="text-center">
                      © 1996-2021, popular_Healthcare.com, Inc. or its affiliates,
                      <br /> California, 33020;
                      <br /> 685 Lane Drive St.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 ">
            <form action="">
              <div className="form-group mb-3">
                <input type="text" className="form-control bg-dark text-white" placeholder="Name *" />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control bg-dark text-white" placeholder="Email Address *" />
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control bg-dark text-white" placeholder="Subject *" />
              </div>
              <div className="form-group mb-3">
                <textarea name="" className="form-control bg-dark text-white" id="" cols="30" rows="10" placeholder="Type Your Message *"></textarea>
              </div>
              <div className="form-group text-center">
                <button type="button" className="btn btn-lg btn-primary"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;