import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/not-found.jpg'

const NotFound = () => {
  return (
    <div className="bg-info">

      <img style={{ width: '100%' }} src={notfound} alt="" />
      <Link to="/" className="btn btn-success"><button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;