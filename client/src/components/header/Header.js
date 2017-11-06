import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="ui inverted menu">
      <nav className="ui container">
        <Link className="item" to='/'>Home</Link>
        <Link className="item" to='/orders'>Orders</Link>
        <Link className="item" to='/'>Link</Link>
      </nav>
    </header>
  );
};

export default Header;
