import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Service from '../../Home/Service/Service';


const Booking = () => {

  const { serviceId } = useParams();

  const [service, setService] = useState({})


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
      <h4> Booking Service:{serviceId}</h4>


      <div className="mt-5 d-flex justify-content-center mb-5 pb-5">

        <div className="shadow p-4 rounded service col-md-3">
          <div className="text-brand text-center">

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



