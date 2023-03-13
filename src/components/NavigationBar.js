import React from 'react';
import { NavLink } from 'react-router-dom';


import './styles/Navbar.css';



function NavigationBar() {
    return (
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          {/* Need to fix hamburger menu */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle-navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav linkFont text-white">
          <li className="nav-item active">
            <NavLink
              to="/"
              end
              className={({ isActive}) =>
                isActive ? 'nav-link active text-white' : 'nav-link'
            }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projects"
              end
              className={({ isActive}) =>
                isActive ? 'nav-link active text-white' : 'nav-link'
            }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              end
              className={({ isActive}) =>
                isActive ? 'nav-link active text-white' : 'nav-link'
            }
            >
              Contact
            </NavLink>
          </li>
       </ul>
          </div>
        </div>
      </nav>
    )
};

export default NavigationBar;