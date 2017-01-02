import React, { Component } from 'react';
import '../Resources/App.css';
import Header from './Header';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
