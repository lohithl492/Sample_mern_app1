
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <i className="bi bi-code-slash me-2"></i>
            <span>My<span className="footer-highlight">Portal</span></span>
          </div>

          <p className="footer-text">
            Connecting people, tasks, and productivity.
          </p>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Surendar. All rights reserved.
            </p>

            <p className="footer-credit mb-0">
              Designed with <i className="bi bi-heart-fill"></i> using React
              & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
