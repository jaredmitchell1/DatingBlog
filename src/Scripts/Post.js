import React, { Component } from 'react';

export default class Post extends Component {
  constructor(article) {
    super();
    this.title = article.title;
    this.body = article.body.split("<br>").map(function(item) {
      return <div>{item}</div>
    });
  }
  render() {
    return (
      <div className="post-container">
        <div className="post-title">{this.title}</div>
        <div className="post-body">{this.body}</div>
      </div>
    );
  }
}