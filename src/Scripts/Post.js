import React, { Component } from 'react';

export default class Post extends Component {
  constructor() {
    super();
    this.title = "The dangers of dating";
    this.body = "This is a sample sentence that we like is good. ".repeat(50);
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