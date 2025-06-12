// src/api/axiosConfig.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Public routes that should not redirect to login
const publicRoutes = ['/posts', '/auth/login', '/auth/register'];

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalUrl = error?.config?.url || '';
    const isPublic = publicRoutes.some(route => originalUrl.includes(route));

    if ((error.response?.status === 401 || error.response?.status === 403) && !isPublic) {
      localStorage.removeItem('token');
      window.location.href = '/login'; // Safe outside React
    }

    return Promise.reject(error);
  }
);

export default API;
