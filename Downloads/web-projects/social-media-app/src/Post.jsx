import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>

    </div>
  );
}

export default Post;