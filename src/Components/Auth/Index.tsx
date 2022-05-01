import React, { useState } from 'react';

import image1 from '../../assets/undraw_breakfast_psiw.svg';
import image2 from '../../assets/undraw_online_groceries_a02y.svg';

import Signup from './Signup';
import Signin from './Signin';

// css
import './Styles/Index.css';

const Index: React.FC = function () {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`sign-container ${isSignup ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Signup />
          <Signin />
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              onClick={() => {
                setIsSignup(true);
              }}
              type="submit"
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img className="image" src={image1} alt="signup" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={() => {
                setIsSignup(false);
              }}
              type="submit"
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img className="image" src={image2} alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default Index;
