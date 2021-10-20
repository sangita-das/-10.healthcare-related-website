import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const Booking = () => {

  const { serviceId } = useParams();

  const [service, setService] = useState({})

  // loading servicedata 
  useEffect(() => {
    fetch('https://sangita-das.github.io/jsonapi/services.json')
      .then(res => res.json())
      .then(result => {
        const foundService = result.find(ser => ser.id === parseInt(serviceId));
        setService(foundService);
      });
  }, []);



  return (
    <div>

      <h3 className="mt-4 text-success">“ No matter what your concern, your first stop is one of our accessible, expert health professionals. ”</h3>
      <h2 className="mt-4 text-secondary">Medical Services of The Specialties</h2>
      <h5>At The Popular Healthcare Services <br /> we offer the most advanced and
        effective bespoke treatment <br /> packages to suit your needs</h5>
      <h4 className="mt-5"> Booking Service:{serviceId}</h4>


      <div className="mt-2 d-flex justify-content-center mb-5 pb-5">

        <div className="shadow p-4 rounded service col-md-3">
          <div className="text-brand text-center">
            <img src={service?.img} alt="" />
          </div>
          <div className="mt-4">
            <h4>{service?.name}</h4>
            <p>{service?.description}</p>
            <div className="text-center">
              <Link to={`/home`}>
                <button className="btn btn-primary">Back To Home</button>
              </Link>

            </div>
          </div>
        </div>
      </div>


      <p>Please download the form and print it.</p>
      <div className="image-div">
        <img
          className=""
          src="https://w3layouts.com/wp-content/uploads/2017/03/medical_appointment_form_Free23-02-2017_1044153474.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Booking;



