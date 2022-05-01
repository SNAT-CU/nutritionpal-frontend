import React from 'react';

const Signin: React.FC = function () {
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
          alt="user"
        />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png"
          alt="password"
        />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" defaultValue="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/tanmay-vaish/"
          className="social-icon"
        >
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tanmay-vaish/"
          className="social-icon"
        >
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            alt="github"
          />
        </a>
      </div>
    </form>
  );
};

export default Signin;
