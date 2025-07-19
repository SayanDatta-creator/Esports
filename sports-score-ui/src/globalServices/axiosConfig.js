import axios from "axios";
import { BASE_URL } from "../globalConfig/apiConfig";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Change as needed
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Attach token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Response error:", error);
    // Example: Handle 401 errors globally
    if (error.response && error.response.status === 401) {
      // Optionally, redirect to login or clear user session
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
