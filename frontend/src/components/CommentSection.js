import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/comments/${postId}`)
      .then(res => setComments(res.data));
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/comments/${postId}`, { content })
      .then(res => {
        setComments([...comments, res.data]);
        setContent('');
      });
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h4>Comments</h4>
      {comments.map(comment => (
        <p key={comment.id}>- {comment.content}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
