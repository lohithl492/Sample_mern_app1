
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      // Admin login
      if (
        email.trim().toLowerCase() === "admin@gmail.com" &&
        password === "admin"
      ) {
        localStorage.setItem(
          "currentuser",
          JSON.stringify({ name: "admin", role: "admin" })
        );

        navigate("/adminhome", { replace: true });
        return;
      }

      // HR / Employee login
      const req = await fetch("http://localhost:3000/api/emp/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await req.json().catch(() => ({}));

      if (!req.ok || !data.user) {
        setError(data.message || data.error || "Invalid email or password.");
        return;
      }

      const user = data.user;

      localStorage.setItem("currentuser", JSON.stringify(user));

      if (user.role === "HR") {
        navigate("/hrhome", { replace: true });
      } else if (user.role === "EMPLOYEE") {
        navigate("/emphome", { replace: true });
      } else {
        localStorage.removeItem("currentuser");
        setError("Your account has an unrecognized role.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <div className="login-card">
              {/* Login heading */}
              <div className="login-heading text-center">
                <div className="login-icon">
                  <i className="bi bi-shield-lock-fill"></i>
                </div>

                <h2>Welcome Back!</h2>
                <p>Sign in to continue to MyPortal</p>
              </div>

              {/* Error message */}
              {error && (
                <div className="alert alert-danger py-2" role="alert">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {error}
                </div>
              )}

              {/* Login form */}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email Address
                  </label>

                  <div className="login-input-group">
                    <i className="bi bi-envelope"></i>
                    <input
                      id="loginEmail"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>

                  <div className="login-input-group">
                    <i className="bi bi-lock"></i>
                    <input
                      id="loginPassword"
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn login-submit w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Login
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="login-footer text-center">
                Don't have an account?{" "}
                <Link to="/register">Create an account</Link>
              </div>

              <div className="login-security text-center">
                <i className="bi bi-shield-check me-1"></i>
                Secure access to your workspace
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
