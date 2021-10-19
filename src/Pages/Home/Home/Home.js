import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Clints from '../Clints/Clints';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      {/* ------------------------welcome----------- */}
      <div className="container">
        <div className="row d-flex- justify-content-center align-items-center py-5 my-5">
          <div className="col-md-6">
            <h1 className="text-dark">Warm Welcome to Popular Healthcare Community</h1>
            <p className="text-black">we have built a healthcare system where you come first.
              Because nothing is more important than your and your family’s health.
            </p>
            <li>Here, you will be treated by caring, internationally trained doctors. They take the time to listen to you and understand your healthcare needs.</li>
            <li>Our lab participates in the world’s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best care center.</li>
            <li>You can get the care you need 24/7 – be it online or in clinic. And you can manage your health via our app: book appointments, access your test results, and more.</li>
          </div>
          <div className="col-md-6">
            <img src="https://nordis.true-emotions.studio/health/wp-content/uploads/sites/14/2018/03/9adf1401a21b-768x512.jpg" alt="" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <Services></Services>
      <Doctors></Doctors>
      <Clints></Clints>
      <Footer></Footer>
    </div>
  );
};

export default Home;