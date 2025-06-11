// src/components/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import '../Style/Navbar.css';

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Navigation links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          {isLoggedIn && (
            <Link to="/create" className="nav-link">Create Post</Link>
          )}
        </div>

        {/* Authentication buttons */}
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button onClick={() => {
              logout();
              navigate("/login");
            }} className="nav-button">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
