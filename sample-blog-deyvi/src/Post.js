import React from 'react';

const Post = (props) => {
  let {id, title, body} = props
  return(
    <section id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </section>
  )
}

export default Post
