import React from 'react';
import Post from './Post.js';

export const Feed = (props) => {
  let {allposts} = props;

  let mappedPosts = allposts.map(post => {
    return (
      <div className='mappedPostsDiv' key={post.id}>
        <Post id={post.id} body={post.body} title={post.title}/>
      </div>
    )
  })

  return(
    <React.Fragment>
      {mappedPosts}
    </React.Fragment>
  )
}
