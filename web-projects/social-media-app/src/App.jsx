import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Post from '/Users/mohamedalbasuony/web-projects/social-media-app/src/Post.jsx'; 

function App() {
  return (
    <div>
      <h1>Fakebook!</h1>
      {/* CreatePostForm */}
      {/* Feed */}
      
      <Post content="This is a test post"/> 
      
      <Post content="This is another test post"/>

      <Post /> {/* Render the Post component here */}
    </div>
  );
}

export default App;
