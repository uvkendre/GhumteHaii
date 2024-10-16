import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Navbar({ user, setUser, isLoggedIn, setIsLoggedIn, handleLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const openLoginModal = () => {
    document.getElementById('login_modal').showModal();
  };

  const openSignupModal = () => {
    document.getElementById('signup_modal').showModal();
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-100 text-black fixed top-0 w-full z-50 shadow-2xl">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown" ref={dropdownRef}>
              <button onClick={toggleMobileMenu} className="btn btn-ghost lg:hidden" tabIndex={0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
            </div>
            <Link to="/" className="btn btn-ghost text-xl font-bold hover:scale-105 duration-300">
            Ghumte Haii
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex font-medium">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:scale-105 duration-300">
                <Link to="/" onClick={handleOptionClick}>
                  Home
                </Link>
              </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
                <button className="hover:scale-105 duration-300">Our Services ⮟</button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full p-4 bg-gray-700 text-white rounded-lg shadow-lg z-10">
                    <li className="hover:scale-105 duration-300">
                      <Link to="/hotels" onClick={handleOptionClick}>
                        Hotels
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/fuel-stations" onClick={handleOptionClick}>
                        Fuel Stations
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/service-shops" onClick={handleOptionClick}>
                        Service Shops
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/diy" onClick={handleOptionClick}>
                        DIYs
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/hospitals" onClick={handleOptionClick}>
                        Hospitals
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/restaurants" onClick={handleOptionClick}>
                        Restaurants
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/vehicle-info" onClick={handleOptionClick}>
                        Vehicle Info
                      </Link>
                    </li>
                    <li className="hover:scale-105 duration-300">
                      <Link to="/weather" onClick={handleOptionClick}>
                        Weather Info
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:scale-105 duration-300">
                <Link to="/about" onClick={handleOptionClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn mx-2 hover:scale-105 duration-300 bg-gradient-to-t from-sky-500 to-blue-300 hover:bg-blue-500 hover:text-orange-500 text-black font-semibold border-none">
                Logout
              </button>
            ) : (
              <>
                <button onClick={openLoginModal} className="btn mx-2 hover:scale-105 duration-300 bg-gradient-to-t from-sky-500 to-blue-300 hover:bg-blue-500 hover:text-orange-500 text-black font-semibold border-none">
                  Login
                </button>
                <button onClick={openSignupModal} className="btn mx-2 hover:scale-105 duration-300 bg-gradient-to-t from-sky-500 to-blue-300 hover:bg-blue-500 hover:text-orange-500 text-black font-semibold border-none">
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      <Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default Navbar;
