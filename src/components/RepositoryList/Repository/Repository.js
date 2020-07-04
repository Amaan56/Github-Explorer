import React from 'react';
import './Repository.css';

const repository = () => {
  return (
    <div className="card">
      <img src="https://avatars3.githubusercontent.com/u/36260787?v=4" />
      <div className="cardChild">
        <h4>Repository : javascript-algorithms</h4>
        <p>
          Description : Algorithms and data structures implemented in JavaScript
          with explanations and links to further readings
        </p>
        <p>Language : JavaScript</p>
        <a href="https://github.com/Snailclimb/JavaGuide">Github Link</a>
        <div className="stats">
          <p>Watch: 20</p>
          <p>Stars: 20</p>
          <p>Fork: 20</p>
        </div>
      </div>
    </div>
  );
};

export default repository;
