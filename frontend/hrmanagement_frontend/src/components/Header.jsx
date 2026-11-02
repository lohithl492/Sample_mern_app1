
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentuser = JSON.parse(
    localStorage.getItem("currentuser") || "null"
  );

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setMenuOpen(false);
    navigate("/login", { replace: true });
  };

  const closeMenu = () => setMenuOpen(false);

  const renderLink = (to, label, icon) => (
    <Link
      to={to}
      onClick={closeMenu}
      className={`nav-link custom-link ${
        location.pathname === to ? "active-link" : ""
      }`}
    >
      <i className={`bi ${icon} me-2`}></i>
      {label}
    </Link>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand brand-logo" to="/" onClick={closeMenu}>
          <span className="brand-icon">
            <i className="bi bi-code-slash"></i>
          </span>
          <span>My<span className="brand-highlight">Portal</span></span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menus */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <div className="navbar-nav mx-auto align-items-lg-center">
            {renderLink("/", "Home", "bi-house-door")}
            {renderLink("/about", "About", "bi-info-circle")}
            {renderLink("/contact", "Contact", "bi-envelope")}

            {!currentuser && (
              <>
                {renderLink("/login", "Login", "bi-box-arrow-in-right")}
                {renderLink("/register", "Register", "bi-person-plus")}
              </>
            )}

            {currentuser?.role === "HR" && (
              <>
                {renderLink("/assign-task", "Assign Task", "bi-clipboard-check")}
                {renderLink("/view-employees", "View Employees", "bi-people")}
              </>
            )}

            {currentuser?.role === "EMPLOYEE" && (
              <>
                {renderLink("/view-task", "View Tasks", "bi-list-task")}
                {renderLink("/add-todo", "Add Todo", "bi-plus-circle")}
              </>
            )}

            {currentuser?.role === "admin" && (
              <>
                {renderLink("/view-employees", "View Employees", "bi-people")}
                {renderLink("/view-tasks", "View Tasks", "bi-kanban")}
              </>
            )}
          </div>

          {/* User info and logout */}
          {currentuser && (
            <div className="d-flex align-items-center gap-3 user-section">
              <div className="user-info">
                <div className="user-avatar">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="user-details">
                  <span className="user-name">
                    {currentuser.name || currentuser.username || "User"}
                  </span>
                  <span className="user-role">{currentuser.role}</span>
                </div>
              </div>

               <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                            >
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Logout
                            </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
