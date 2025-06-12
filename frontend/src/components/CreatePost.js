import React, { useState } from 'react';
import API from '../components/axiosConfig'; // <-- use your axios instance here
import { useNavigate } from 'react-router-dom';
import '../Style/CreatePost.css';

function CreatePost() {
    const [post, setPost] = useState({ title: '', content: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post('/posts', post)
            .then((res) => {
                setIsSuccess(true);
                setPost({ title: '', content: '' });
                setTimeout(() => {
                    setIsSuccess(false);
                    navigate('/posts');
                }, 1500);
            })
            .catch((err) => {
                console.error("Error creating post:", err);
                alert("Failed to create post. Make sure you're logged in.");
            });
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
                {isSuccess && (
                    <div className="success-message">
                        Post created successfully! Redirecting...
                    </div>
                )}
            </form>
        </div>
    );
}

export default CreatePost;
