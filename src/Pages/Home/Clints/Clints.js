import React from 'react';
import clint1 from '../../../images/Clints/clint1.jpg';
import clint2 from '../../../images/Clints/clint2.jpg';
import clint3 from '../../../images/Clints/clint3.jpg';
import './Clints.css';

const Clints = () => {
  return (
    <div className="container testimonials">

      <h2 className="">Testimonials</h2>


      <div className="row">
        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={clint1} alt="" className="clint" />
            <blockquote>
              Only the warment and most pleasant words for the group of popular healthcare community.All these people have become my family and support.
            </blockquote>
            <h5 className="fw-bold">Lara Crown</h5>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={clint2} alt="" className="clint" />
            <blockquote>
              I did not believe that they could help me, but i decided to take a chance. The results have surpassed all my execptions.
            </blockquote>
            <h5 className="fw-bold">Jarry Spnell</h5>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <div className="profile">
            <img src={clint3} alt="" className="clint" />
            <blockquote>
              Many thanks to Joe Carveil for her professionalism of treatment, which can be seen already a month after treatment.
            </blockquote>
            <h5 className="fw-bold">Rowthy Singha</h5>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Clints;