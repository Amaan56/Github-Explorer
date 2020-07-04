import React from 'react';
import './Navbar.css';

const navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">Github Explorer</a>

        <div className="searchContent">
          <input
            type="text"
            id="searchField"
            placeholder="Search for the repository here...."
          />
          <button className="searchButton">Search</button>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
