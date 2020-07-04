import React from 'react';
import './Navbar.css';

const navbar = (props) => {
  return (
    <header>
      <nav>
        <a href="/">Github Explorer</a>

        <div className="searchContent">
          <input
            type="text"
            id="searchField"
            placeholder="   Search for the repository here...."
            onChange={(e) => {
              props.onChangeHandler(e);
            }}
            value={props.searchValue}
          />
          <button className="searchButton" onClick={props.onSubmitHandler}>
            Search
          </button>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
