import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, img, Specialty, Education } = doctor;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-primary">Specialty:{Specialty}</h5>
      <h5 className="text-primary">{Education}</h5>
    </div>
  );
};

export default Doctor;