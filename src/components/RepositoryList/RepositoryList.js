import React from 'react';
import Repository from './Repository/Repository';
import './RepositoryList.css';

const repositoryList = (props) => {
  const repoData = props.repos.map((repo) => {
    return <Repository key={repo.avatarImg} repo={repo} />;
  });
  return <div className="repositoryList">{repoData}</div>;
};

export default repositoryList;
