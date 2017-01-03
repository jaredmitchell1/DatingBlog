import React, { Component } from 'react';
import '../Resources/App.css';
import Header from './Header';
import Post from './Post';
import articles from "./Articles";

class App extends Component {
  render() {
    let posts = articles.map(function (a) {
        return <Post title={a.title} body={a.body}/>
    });

    return (
      <div className="App">
        <Header />
        <div className="App-body">
          {posts}
        </div>
      </div>
    );
  }
}

export default App;
