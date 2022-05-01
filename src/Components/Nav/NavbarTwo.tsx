import React from 'react';
import './styles/Navbar.css';

const NavbarOne: React.FC = function () {
  return (
    <nav className="navbar-two">
      <div className="navbar-container">
        <a href="https://flowbite.com">
          <span className="navbar-title">
            Nutrition<span>Pal</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavbarOne;
