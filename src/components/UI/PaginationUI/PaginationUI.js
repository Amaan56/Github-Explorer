import React from 'react';
// import Pagination from 'react-bootstrap/Pagination';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { Pagination } from '@material-ui/lab';

import './PaginationUI.css';

const paginationUI = (props) => {
  let items = [];

  for (let i = 1; i <= Math.ceil(props.totalRepos / props.reposPerPage); i++) {
    let item = <div className="index">{i}</div>;
    items.push(item);
  }
  return (
    <div className="container">
      <span>{items}</span>
      <svg viewBox="0 0 100 100">
        <path d="m 7.1428558,49.999998 c -1e-7,-23.669348 19.1877962,-42.8571447 42.8571442,-42.8571446 23.669347,0 42.857144,19.1877966 42.857144,42.8571446" />
      </svg>
      <svg viewBox="0 0 100 100">
        <path d="m 7.1428558,49.999998 c -1e-7,23.669347 19.1877962,42.857144 42.8571442,42.857144 23.669347,0 42.857144,-19.187797 42.857144,-42.857144" />
      </svg>
    </div>
  );
};

export default paginationUI;
