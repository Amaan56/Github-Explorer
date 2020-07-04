import React, { Component } from 'react';
import RepositoryList from '../components/RepositoryList/RepositoryList';
import axios from 'axios';
import Navbar from '../components/Navbar';

class Explorer extends Component {
  state = {
    data: [],
    searchText: '',
  };

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

  render() {
    return (
      <div>
        <Navbar
          onChangeHandler={this.searchChangeHandler}
          onSubmitHandler={this.searchSubmitHandler}
          searchValue={this.state.searchText}
        />
        <RepositoryList repos={this.state.data} />
      </div>
    );
  }
}

export default Explorer;
