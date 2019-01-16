import React, { Component } from 'react';
import data from './blog_posts.json';
import { Feed } from './Feed.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allposts: data,
    };
  }
  render() {
    let { allposts } = this.state
    return (
      <>
        <Feed allposts={allposts}/>
      </>
    );
  }
}

export default App;
