// import React from 'react';
// import './Header.css';
// import logo from '../../assets/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell as regularBell } from '@fortawesome/free-regular-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   return (
//     <>
//       <div className="main">
//         <div className="top"></div>
//         <div className="logo">
//           <img src={logo} alt="Logo" className="logo-img" />
//           <div className="header-icons">
//             <FontAwesomeIcon icon={regularBell} className="header-icon" />
//             <FontAwesomeIcon icon={faUser} className="header-icon" />
//           </div>
//         </div>
//         <div className="header">
//           <div className="btn1">
//             <select
//               className="language-btn"
//               name="Select_Languages"
//               id="Select_Languages"
//             >
//               <option value="  Select Languages"> Select Languages</option>
//               <option value="English ">Urdu </option>
//               <option value="English ">English</option>
//               <option value="English ">France </option>
//               <option value="English ">Irani</option>
//               <option value="English ">Bangaliii</option>
//               <option value="English ">Srilanken</option>
//             </select>
//           </div>
//           <div className="nav-links">
//             <a href="#" className="nav-link">
//               Home
//             </a>
//             <a href="#about" className="nav-link">
//               About
//             </a>
//             <a href="#" className="nav-link">
//               Our Menu
//             </a>
//             <a href="#" className="nav-link">
//               Blog
//             </a>
//             <a href="#" className="nav-link">
//               Testimonials
//             </a>
//             <a href="#" className="nav-link">
//               Contact
//             </a>
//           </div>
//           <div className="btn2">
//             <button className="login-btn">Login</button>
//             <button className="signup-btn">Sign Up</button>
//           </div>
//         </div>
//         <div className="hero-container">
//           <div className="hero-text">
//             <h1 className="welcome">Welcome!</h1>
//             <h2 className="main-heading">We Make Delicious Food</h2>
//             <p className="description">
//               Good food starts with good ingredients. We bring you the best.
//             </p>
//             <a href="#" className="order-btn">
//               Order Online
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as regularBell } from '@fortawesome/free-regular-svg-icons';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="main">
        <div className="top"></div>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="header-icons">
            <FontAwesomeIcon icon={regularBell} className="header-icon" />
            <FontAwesomeIcon icon={faUser} className="header-icon" />
            <div className="hamburger-menu" onClick={toggleMobileMenu}>
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="header-icon mobile-only"
              />
            </div>
          </div>
        </div>

        <div className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="btn1">
            <select
              className="language-btn"
              name="Select_Languages"
              id="Select_Languages"
            >
              <option value="Select Languages"> Select Languages</option>
              <option value="Urdu">Urdu</option>
              <option value="English">English</option>
              <option value="France">France</option>
              <option value="Irani">Irani</option>
              <option value="Bangaliii">Bangaliii</option>
              <option value="Srilanken">Srilanken</option>
            </select>
          </div>
          <div className="nav-links">
            <a
              href="#"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Menu
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#"
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="btn2">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-text">
            <h1 className="welcome">Welcome!</h1>
            <h2 className="main-heading">We Made Delicious Food for You</h2>
            <p className="description">
              Good food starts with good ingredients. We only bring you the
              best.
            </p>
            <a href="#" className="order-btn">
              Order Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
