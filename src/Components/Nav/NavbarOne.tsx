import React from 'react';
import './styles/Navbar.css';

const NavbarOne: React.FC = function () {
  return (
    <nav className="navbar-one">
      <div className="navbar-container">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="navbar-title">
            Nutrition<span>Pal</span>
          </span>
        </a>
        <div className="navbar-part-one">
          <div className="bar-container">
            <div className="menu-bar">
              <svg
                className="search-bar-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="search-bar"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="mobile-menu"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="menu-bar-icon-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="menu-bar-icon-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="navbar-part-two" id="mobile-menu-3">
          <ul className="navigations">
            <li>
              <a href="#" className="navigation-link-home" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navigation-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="navigation-link">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOne;
