import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import CommentSection from './CommentSection';
import '../Style/PostDetail.css';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <div className="loading">Loading post...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!post) return <div className="not-found">Post not found</div>;

  return (
    <div className="post-detail-container">
      <article className="post-article">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-content">{post.content}</div>
      </article>
      
      <CommentSection postId={postId} />
      
      <Link to="/posts" className="back-link">
        ← Back to all posts
      </Link>
    </div>
  );
}

export default PostDetail;