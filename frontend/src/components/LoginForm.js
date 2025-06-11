import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import '../Style/LoginForm.css';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", form);
      login(res.data.token);
      alert("Login successful!");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Username" 
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })} 
            required 
          />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;