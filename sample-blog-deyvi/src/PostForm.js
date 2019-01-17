import React from 'react';

export const PostForm = (props) => {
  let { title, body, handleTextChange, handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title{' '}
          <input type='text' id='title' value={title} onChange={handleTextChange} required />
        </label>
        <label htmlFor='body'>Body
          <input type='text'id='body' value={body} onChange={handleTextChange} required />
        </label>
        <button>Add Post!</button>
      </form>
    </>
  )
}
