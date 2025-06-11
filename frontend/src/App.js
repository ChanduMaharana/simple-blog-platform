import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/HomePage';
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/posts" element={<PostList />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<Register />} />
              <Route path="/posts/:postId" element={<PostDetail />} />
              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <CreatePost />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <footer className="app-footer">
            <p>© {new Date().getFullYear()} Simple Blog Platform. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;