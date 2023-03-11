import React from 'react';
import { NavLink } from 'react-router-dom';


import './styles/Navbar.css';



function NavigationBar() {
    return (
       <ul className="nav nav-tabs linkFont justify-content-center">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive}) =>
                isActive ? 'nav-link active' : 'nav-link'
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
                isActive ? 'nav-link active' : 'nav-link'
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
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
              Contact
            </NavLink>
          </li>
       </ul>
    )
};

export default NavigationBar;