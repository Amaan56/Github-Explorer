import React from 'react';

import styles from './PaginationUI.module.css';

const paginationUI = (props) => {
  let items = [];
  let item = null;

  for (let i = 1; i <= props.totalRepos / props.reposPerPage; i++) {
    item = (
      <span
        className={props.currentPage === i ? styles.active : ''}
        key={i}
        onClick={() => {
          props.changePageNumber(i);
        }}
      >
        {i}
      </span>
    );
    items.push(item);
  }
  return (
    <div className={styles.pageUI}>
      <div className={styles.pagination}>{items}</div>
    </div>
  );
};

export default paginationUI;
