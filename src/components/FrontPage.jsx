import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FrontPage.css';

const FrontPage = () => (
  <nav className="nav">
    <h1 className="nav-title">Math Magicians</h1>
    <ul className="nav-links">
      <li>
        <Link to="/home" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="nav-item">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className="nav-item">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default FrontPage;
