import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleCommentSubmit(e) {
    e.preventDefault();

    const comment = e.target.elements.comment.value;

    setComments([...comments, comment]);

    e.target.reset();
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>

      <ul>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment">Comment:</label>
        <input type="text" id="comment" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;