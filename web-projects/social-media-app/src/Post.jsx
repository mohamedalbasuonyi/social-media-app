import React, { useState } from 'react';

function Comment() {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle submitting the comment
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the input field after submitting
  };

  return (
    <div>
      <h4>Leave a Comment</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Write your comment here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comment;
