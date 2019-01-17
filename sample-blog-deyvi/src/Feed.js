import React from 'react';
import { Post } from './Post.js';
import { PostForm } from './PostForm.js';

export const Feed = (props) => {
  let { allposts, title, body, handleTextChange, handleSubmit } = props;

  let mappedPosts = allposts.map(post => {
    return (
      <div className='mappedPostsDiv' key={post.id}>
        <Post id={post.id} body={post.body} title={post.title}/>
        <button className='deleteButton'>Delete</button>
      </div>
    )
  })

  return(
    <React.Fragment>
      <h1>Blah Blah Blog</h1>
      <h4>Add Post: </h4>
      <PostForm title={title} body={body} handleTextChange={handleTextChange} handleSubmit={handleSubmit} />
      {mappedPosts}
    </React.Fragment>
  )
}
