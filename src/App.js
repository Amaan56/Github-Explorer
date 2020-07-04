import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Explorer from './containers/Explorer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Explorer />
      </div>
    );
  }
}

export default App;
