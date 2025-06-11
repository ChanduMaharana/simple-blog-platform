import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Style/PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <h2>Recent Blog Posts</h2>
        <Link to="/create" className="create-post-button">
          Create New Post
        </Link>
      </div>
      
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts found. Be the first to create one!</p>
          <Link to="/create" className="create-post-link">
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post._id || post.id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">
                {post.content.length > 150
                  ? `${post.content.substring(0, 150)}...`
                  : post.content}
              </p>
              <Link to={`/posts/${post._id || post.id}`} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;