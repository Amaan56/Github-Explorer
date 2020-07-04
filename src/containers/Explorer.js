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
    this.setState({
      searchText: e.target.value,
    });
    console.log(this.searchText);
  };

  searchSubmitHandler = () => {
    console.log(this.searchText);
  };

  render() {
    return (
      <div>
        <Navbar
          onChangeHandler={this.searchChangeHandler}
          onSubmitHandler={this.searchSubmitHandler}
          searchVal={this.searchText}
        />
        <RepositoryList />
      </div>
    );
  }
}

export default Explorer;
