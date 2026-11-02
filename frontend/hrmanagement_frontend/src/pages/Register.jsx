
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!name.trim() || !email.trim() || !password || !role) {
      setMessage("Please fill in all fields.");
      setMessageType("danger");
      return;
    }

    setLoading(true);

    try {
      const req = await fetch(
        "http://localhost:3000/api/emp/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password,
            role,
          }),
        }
      );

      const data = await req.json().catch(() => ({}));

      if (req.ok) {
        setMessage(data.message || "Registration successful!");
        setMessageType("success");

        setName("");
        setEmail("");
        setPassword("");
        setRole("");
      } else {
        setMessage(
          data.message || data.error || "Registration failed. Please try again."
        );
        setMessageType("danger");
      }
    } catch (error) {
      setMessage("Unable to connect to the server. Please try again.");
      setMessageType("danger");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <div className="register-card">
              {/* Header */}
              <div className="register-heading text-center">
                <div className="register-icon">
                  <i className="bi bi-person-plus-fill"></i>
                </div>

                <h2>Create Account</h2>
                <p>Join MyPortal and get started today</p>
              </div>

              {/* Status message */}
              {message && (
                <div
                  className={`alert alert-${messageType} py-2`}
                  role="alert"
                >
                  {message}
                </div>
              )}

              {/* Registration form */}
              <form onSubmit={handleRegister}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <div className="register-input-group">
                    <i className="bi bi-person"></i>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <div className="register-input-group">
                    <i className="bi bi-envelope"></i>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>

                  <div className="register-input-group">
                    <i className="bi bi-lock"></i>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      placeholder="Create a password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete="new-password"
                      minLength={8}
                      required
                    />
                  </div>
                  <small className="text-muted">
                    Use at least 8 characters.
                  </small>
                </div>

                <div className="mb-4">
                  <label htmlFor="role" className="form-label">
                    Register As
                  </label>

                  <div className="register-input-group">
                    <i className="bi bi-people"></i>
                    <select
                      id="role"
                      className="form-select"
                      value={role}
                      onChange={(event) => setRole(event.target.value)}
                      required
                    >
                      <option value="">Choose your role</option>
                      <option value="HR">HR</option>
                      <option value="EMPLOYEE">Employee</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn register-submit w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Registering...
                    </>
                  ) : (
                    <>
                      Create Account
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </form>

              <div className="register-footer text-center">
                Already have an account?{" "}
                <Link to="/login">Login here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
