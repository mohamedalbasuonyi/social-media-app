import React from 'react';

function Feed({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;