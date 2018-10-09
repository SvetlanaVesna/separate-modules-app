import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Home = () => (
    <div>
        <p>Домашння форма</p>
      <ul className="menu">
        <li>
         1
        </li>
        <li>
          2
        </li>
        <li>
       3
        </li>
        <li>
          <Link to="/home" activeClassName="active">Main</Link>
        </li>
      </ul>
    </div>
);

export default Home;
