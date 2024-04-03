import { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (postData) => {
    postData.id = Date.now();
    setPosts([...posts, postData]);
  };

  return (
    <div className="container">
      <h1>POSTA</h1>

      <CreatePostForm onSubmit={handleCreatePost} />

      <Feed posts={posts} />
    </div>
  );
}

export default App;