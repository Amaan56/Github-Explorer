import React from 'react';
import './Repository.css';

const repository = (props) => {
  return (
    <div className="card">
      <img src={props.repo.avatarImg} alt="abc" />
      <div className="cardChild">
        <h4>Repository : {props.repo.name}</h4>
        <p>Description : {props.repo.description}</p>
        <p>Language : {props.repo.language}</p>
        <p>
          {' '}
          For Github repository click <a href={props.repo.gitUrl}>Here</a>
        </p>
        <div className="stats">
          <p>Watch: {props.repo.watch}</p>
          <p>Stars: {props.repo.stars}</p>
          <p>Fork: {props.repo.fork}</p>
        </div>
      </div>
    </div>
  );
};

export default repository;
