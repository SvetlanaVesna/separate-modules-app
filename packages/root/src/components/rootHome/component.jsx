import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const rootHome = () => (
    <div>
        <p>Домашння форма</p>
      <ul className="menu">
        <li>
          <Link exact to="/calculator" activeClassName="active">Calculator</Link>
        </li>
        <li>
          <Link to="/auth" activeClassName="active">Auth</Link>
        </li>
        <li>
          <Link to="/home" activeClassName="active">Main</Link>
        </li>
      </ul>
    </div>
);

export default rootHome;
