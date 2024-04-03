import { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (postData) => {
    setPosts([...posts, postData]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>

      <CreatePostForm onSubmit={handleCreatePost} />

      <Feed posts={posts} />
    </div>
  );
}

export default App;