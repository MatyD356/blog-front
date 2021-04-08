import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [posts, setPosts] = useState<any>([]);
  useEffect((): void => {
    const fetchPosts = (): void => {
      fetch('http://localhost:5000/posts/')
        .then(response => response.json())
        .then(data => setPosts(data.posts))
    }
    fetchPosts()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!posts
          ? <p>loading</p>
          : posts.map((post: any) => <p key={post._id}>{post.title}</p>)
        }
      </header>
    </div>
  );
}

export default App;
