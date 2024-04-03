import { useState } from 'react';

function CreatePostForm(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the submitted data to the parent component
    props.onSubmit({ title, content });

    // Reset the form
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="content">Content:</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />

      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;