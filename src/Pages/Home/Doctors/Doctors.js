import React from 'react';
import '../Doctors/Doctors.css'

import doctor1 from '../../../images/Doctor/doctor1.jpg';
import doctor2 from '../../../images/Doctor/doctor2.jpg';
import doctor3 from '../../../images/Doctor/doctor3.jpg';
import doctor4 from '../../../images/Doctor/doctor4.jpg';
import doctor5 from '../../../images/Doctor/doctor5.jpg';
import doctor6 from '../../../images/Doctor/doctor6.jpg';

import Doctor from '../Doctor/Doctor';

const doctors = [
  {
    img: doctor1,
    name: "John Monn",
    Specialty: "Cardiology, Pediatrics",
    Education: "Ph.D. in cardiology",

  },
  {
    img: doctor2,
    name: "Anna Winds",
    Specialty: "Therapist",
    Education: "Ph.D. in therapist",

  },
  {
    img: doctor3,
    name: "Dan Washington",
    Specialty: "Laboratory",
    Education: "Ph.D. in laboratory",

  },
  {
    img: doctor4,
    name: "Will Smith",
    Specialty: "Cardiology",
    Education: "Ph.D. in cardiology",
  },
  {
    img: doctor5,
    name: "Lisa Smith",
    Specialty: "Cardiology, Pediatrics",
    Education: "Ph.D. in cardiology",
  },
  {
    img: doctor6,
    name: "Jim Hendrix",
    Specialty: "Psychologist",
    Education: "Ph.D. in psychology",

  }

];


const Doctors = () => {
  return (
    <div id="doctors" className="container min-vh-100 g-4">
      <h2 className="text-primary mt-5 fw-bold mb-5 ">OUR DOCTORS TEAM</h2>
      <div className="row team-doctor ">
        {
          doctors.map(doctor => <Doctor
            key={doctor.name}
            doctor={doctor}
          >

          </Doctor>)
        }
      </div>
    </div>
  );
};

export default Doctors;

