import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <nav>
      <Link to="/products/all">
        <img src={logo} alt="logo" />
      </Link>

      <ul>
        <li>
          <NavLink exact to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
