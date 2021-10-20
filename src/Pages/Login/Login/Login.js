import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "@firebase/auth";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import BannerImage from '../../../images/login.jpg'


const Login = () => {
  const { signInUsingGoogle, user, registerUser, signInUser } = useAuth();

  const location = useLocation();
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);


  const auth = getAuth();

  const toggleLogin = e => {
    setIsLogin(e.target.checked)
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
      })
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password must contain 2 upper case.')
      return;
    }
    if (isLogin) {
      processLogin(auth, email, password);
      return signInUser(email, password)
        .then(res => {
          console.log(res.user)
          history.push(redirect_uri);
        })
    }
    else {
      console.log('form register');

      registerUser(email, password)
        .then(res => {
          console.log(res.user)
          history.push(redirect_uri);
        })

    }

  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');

      })
      .catch(error => {
        setError(error.message)
      });

  }



  const registerNewUser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        history.push(redirect_uri);
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }

  return (
    <div className=" container bg-light">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <h1>Please {isLogin ? 'Login' : 'Register Here'}</h1>



        <div className="col-md-6  p-5">

          {!isLogin && <div className="row mb-3">
            <p className="">This is {user.email}</p>
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" placeholder="Your name" />
            </div>
          </div>}


          <div className="form-group row mb-3" onSubmit={handleRegistration}>
            <label htmlFor="" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input onBlur={handleEmailChange} type="text" className="form-control" required />
            </div>
          </div>

          <div className="form-group row mb-3">
            <label htmlFor="" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input onBlur={handlePasswordChange} type="password" className="form-control" required />
            </div>
          </div>
          <div className="form-group " onSubmit={signInUser}>
            <div className="row-mb-3 text-danger">{error}</div>
            <div className="col-12">
              <div className="form-check text-start">
                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Already Registered?
                </label>
              </div>
            </div>
            <button onClick={handleRegistration} type="submit" value="Register" className="mx-3 mt-3 btn btn-info" >
              {isLogin ? 'Login' : 'Register'}
            </button>

            <button onClick={handleResetPassword} type="button" className="btn btn-secondary mx-3 mt-3">Reset Password</button>

            <label htmlFor="" className="text-danger">Forgot password?</label>
          </div>
          <div className="from-group mt-5">
            <button onClick={handleGoogleLogin} className=" mt-5 btn btn-primary">
              Sign in With Google
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img className="img-fluid" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;




