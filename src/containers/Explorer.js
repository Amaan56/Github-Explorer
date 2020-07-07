import React, { Component } from 'react';
import RepositoryList from '../components/RepositoryList/RepositoryList';
import axios from 'axios';
import Navbar from '../components/UI/Navbar/Navbar';
import PaginationUI from '../components/UI/PaginationUI/PaginationUI';
import paginationUI from '../components/UI/PaginationUI/PaginationUI';

class Explorer extends Component {
  state = {
    data: [],
    searchText: '',
    currentPage: 1,
    reposPerPage: 3,
  };

  componentDidMount() {
    this.setState(
      {
        searchText: 'Java',
      },
      () => {
        this.searchSubmitHandler();
      }
    );
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  searchChangeHandler = (e) => {
    const val = e.target.value;
    this.setState({
      searchText: val,
    });
  };

  searchSubmitHandler = () => {
    let url = `https://api.github.com/search/repositories?q=${this.state.searchText}+in:name,description&type=Repositories&sort=stars`;
    let repoData = [];
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);

        repoData = responseData.data.items.map((item) => {
          return {
            avatarImg: item.owner.avatar_url,
            name: item.full_name,
            description: item.description,
            gitUrl: item.html_url,
            language: item.language,
            watch: item.watchers,
            stars: item.stargazers_count,
            fork: item.forks_count,
          };
        });
        this.setState({
          data: repoData,
          searchText: '',
        });
      })
      .catch((err) => console.log(err));
  };

  changePageNumber = (page) => {
    console.log(page);

    this.setState({
      currentPage: page,
    });
  };
  render() {
    //Apllying Pagination
    let indexOfLastRepo = this.state.currentPage * this.state.reposPerPage;
    let indexOfFirstRepo = indexOfLastRepo - this.state.reposPerPage;
    const dataRepo = this.state.data;
    const currentRepos = dataRepo.slice(indexOfFirstRepo, indexOfLastRepo);

    let paginationPart = null;

    if (this.state.data.length > 0) {
      paginationPart = (
        <PaginationUI
          reposPerPage={this.state.reposPerPage}
          totalRepos={this.state.data.length}
          currentPage={this.state.currentPage}
          changePageNumber={this.changePageNumber}
        />
      );
    }
    return (
      <div>
        <Navbar
          onChangeHandler={this.searchChangeHandler}
          onSubmitHandler={this.searchSubmitHandler}
          searchValue={this.state.searchText}
        />
        <RepositoryList repos={currentRepos} />
        {paginationPart}
      </div>
    );
  }
}

export default Explorer;
