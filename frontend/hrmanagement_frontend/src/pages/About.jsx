
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="container text-center">
          <div className="about-icon">
            <i className="bi bi-info-circle-fill"></i>
          </div>

          <h1>About MyPortal</h1>

          <p>
            A smarter way to connect people, manage tasks,
            and improve workplace productivity.
          </p>

          <Link to="/contact" className="btn about-cta">
            Contact Us <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>

      {/* About content */}
      <section className="container about-content">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="about-label">WHO WE ARE</span>
            <h2>Making teamwork simpler and smarter</h2>

            <p>
              MyPortal is a centralized platform designed to help
              organizations coordinate their daily activities.
              It provides a common workspace for administrators,
              HR teams, and employees.
            </p>

            <p>
              From assigning tasks to tracking work, our goal is
              to make everyday operations more organized,
              transparent, and efficient.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="about-feature-box">
              <div className="about-feature">
                <i className="bi bi-people-fill"></i>
                <div>
                  <h5>Team Collaboration</h5>
                  <p>Keep your team connected and organized.</p>
                </div>
              </div>

              <div className="about-feature">
                <i className="bi bi-clipboard-check-fill"></i>
                <div>
                  <h5>Task Management</h5>
                  <p>Assign, manage, and track tasks efficiently.</p>
                </div>
              </div>

              <div className="about-feature">
                <i className="bi bi-shield-check"></i>
                <div>
                  <h5>Role-Based Access</h5>
                  <p>Provide relevant features for each user role.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="about-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-label">WHAT WE FOCUS ON</span>
            <h2>Our Core Values</h2>
            <p>Built around simplicity, collaboration, and growth.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card h-100">
                <i className="bi bi-lightning-charge-fill"></i>
                <h4>Efficiency</h4>
                <p>
                  Simplify daily workflows and reduce unnecessary
                  manual work.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card h-100">
                <i className="bi bi-people"></i>
                <h4>Collaboration</h4>
                <p>
                  Help teams communicate and work toward shared goals.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="value-card h-100">
                <i className="bi bi-graph-up-arrow"></i>
                <h4>Growth</h4>
                <p>
                  Encourage continuous improvement and better
                  workplace performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-bottom text-center">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Explore MyPortal and make your work more organized.</p>

          <Link to="/contact" className="btn about-cta">
            Get in Touch <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
