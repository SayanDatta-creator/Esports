import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });

  const loginMutation = useLogin({
    onSuccess: (data) => {
      if (data && data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.reload();
      }
      // localStorage.setItem("token", data.token);
      // window.location.href = "/"; // Redirect to home page
    },
    onError: (error) => {
      setToast({ open: true, message: error?.response?.data?.message || error.message || "Login failed" });
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loginPayload = {
      email,
      password,
    };
    loginMutation.mutate(loginPayload);
  };

  return (
    <>
      <form
        className="auth-form"
        style={{ position: "relative", zIndex: 3 }}
        onSubmit={handleLogin}
      >
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
            title={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <Link to="/forgot-password" className="forgot-password">
          Forgot password?
        </Link>
        <button type="submit" className="auth-btn" disabled={loginMutation.isLoading}>
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
        <p className="switch-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
      {toast.open && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', background: '#ff1744', color: '#fff', padding: '12px 24px', borderRadius: 8, zIndex: 9999 }}>
          {toast.message}
          <button style={{ marginLeft: 16, background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => setToast({ open: false, message: "" })}>X</button>
        </div>
      )}
    </>
  );
};

export default Login;
