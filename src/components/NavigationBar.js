import React from 'react';
import { NavLink } from 'react-router-dom';


import './styles/Navbar.css';



function NavigationBar() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarConent" aria-controls="navbarConent" aria-expanded="false" aria-label="Toggle">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarConent">
          <ul className="nav linkFont">
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
          </div>
        </div>
      </nav>
    )
};

export default NavigationBar;