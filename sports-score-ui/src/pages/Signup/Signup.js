import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "" });

  const signupMutation = useSignup({
    onSuccess: (data) => {
      if (data && data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.reload();
      }
      // localStorage.setItem("token", data.token);
      // window.location.href = "/"; // Redirect to home page
    },
    onError: (error) => {
      setToast({ open: true, message: error?.response?.data?.message || error.message || "Signup failed" });
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Optionally validate passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const signupPayload = {
      email,
      password,
    };
    signupMutation.mutate(signupPayload);
  };

  return (
    <>
      <div>
        <form
          className="auth-form"
          style={{ position: "relative", zIndex: 3 }}
          onSubmit={handleSignup}
        >
          <h2>Signup</h2>
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
              placeholder="Create password"
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
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              title={showConfirmPassword ? "Hide Password" : "Show Password"}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button type="submit" className="auth-btn" disabled={signupMutation.isLoading}>
            {signupMutation.isLoading ? "Signing up..." : "Signup"}
          </button>
          <p className="switch-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      {toast.open && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', background: '#ff1744', color: '#fff', padding: '12px 24px', borderRadius: 8, zIndex: 9999 }}>
          {toast.message}
          <button style={{ marginLeft: 16, background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={() => setToast({ open: false, message: "" })}>X</button>
        </div>
      )}
    </>
  );
};

export default Signup;
