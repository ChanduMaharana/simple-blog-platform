import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import '../Style/CreatePost.css';

function CreatePost() {
    const [post, setPost] = useState({ title: '', content: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/posts', post)
        .then(res => {
            setIsSuccess(true);
            setPost({ title: '', content: '' });
            setTimeout(() => {
                setIsSuccess(false);
                navigate('/posts'); // Redirect to view posts after creation
            }, 1500);
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="create-post-container">
            <h2>Create Post</h2>
            <form className="create-post-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={post.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Write your post content here..."
                    value={post.content}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Publish Post</button>
                {isSuccess && <div className="success-message">Post created successfully! Redirecting...</div>}
            </form>
        </div>
    );
}

export default CreatePost;