import React from 'react';

const Signup: React.FC = function () {
  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"
          alt="user"
        />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <img
          src="https://img.icons8.com/material-sharp/24/000000/new-post.png"
          alt="email"
        />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png"
          alt="password"
        />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="btn" defaultValue="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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

export default Signup;
