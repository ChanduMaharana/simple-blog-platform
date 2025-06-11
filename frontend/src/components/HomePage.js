import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/HomePage.css';

function Homepage() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="main-title">Simple Blog Platform</h1>
          <p className="tagline">Share your thoughts with the world</p>
          <div className="cta-buttons">
            <Link to="/posts" className="btn btn-primary">View Posts</Link>
            <Link to="/login" className="btn btn-outline">Get Started</Link>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Write Beautiful Posts</h3>
          <p>Express yourself with our easy-to-use editor.</p>
        </div>
        <div className="feature">
          <h3>Connect with Others</h3>
          <p>Join a community of writers and readers.</p>
        </div>
        <div className="feature">
          <h3>Simple & Clean</h3>
          <p>Focus on what matters - your content.</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;