import React, { Component } from 'react';
import data from './blog_posts.json';
import { Feed } from './Feed.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allposts: data,
      title: '',
      body: '',
    };
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.id] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { allposts, title, body } = this.state;
    const newPost = allposts.slice(0);
    let randomIdNum = Math.random();
    newPost.unshift({id:randomIdNum, title, body });

    this.setState({
      allposts: newPost,
      title: '',
      body: ''
    });

  };

  render() {
    let { allposts, title, body } = this.state
    return (
      <>
        <Feed allposts={allposts} title={title} body={body} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit}/>
      </>
    );
  }
}

export default App;
