
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [emailid, setEmailid] = useState("");
  const [colname, setColname] = useState("VFSTR");
  const [submitted, setSubmitted] = useState(false);

  // Function to submit the form
  const RegisterForm = (event) => {
    event.preventDefault();

    console.log({
      name,
      age: Number(age),
      emailid,
      colname,
    });

    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        {/* Page heading */}
        <div className="contact-heading text-center mb-5">
          <div className="contact-icon">
            <i className="bi bi-person-lines-fill"></i>
          </div>

          <h1>Contact Registration</h1>
          <p>Enter your details using the form below.</p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Form */}
          <div className="col-12 col-lg-6">
            <div className="contact-card">
              <h4>
                <i className="bi bi-pencil-square me-2"></i>
                Registration Form
              </h4>

              {submitted && (
                <div className="alert alert-success" role="status">
                  Form submitted successfully!
                </div>
              )}

              <form onSubmit={RegisterForm}>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">
                    Full Name
                  </label>

                  <div className="contact-input-group">
                    <i className="bi bi-person"></i>
                    <input
                      id="contactName"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactAge" className="form-label">
                    Age
                  </label>

                  <div className="contact-input-group">
                    <i className="bi bi-calendar3"></i>
                    <input
                      id="contactAge"
                      type="number"
                      className="form-control"
                      value={age}
                      onChange={(event) => {
                        setAge(event.target.value);
                        setSubmitted(false);
                      }}
                      min="1"
                      max="120"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label">
                    Email Address
                  </label>

                  <div className="contact-input-group">
                    <i className="bi bi-envelope"></i>
                    <input
                      id="contactEmail"
                      type="email"
                      className="form-control"
                      value={emailid}
                      onChange={(event) => {
                        setEmailid(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="collegeName" className="form-label">
                    College Name
                  </label>

                  <div className="contact-input-group">
                    <i className="bi bi-building"></i>
                    <input
                      id="collegeName"
                      type="text"
                      className="form-control"
                      value={colname}
                      onChange={(event) => {
                        setColname(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Enter college name"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn contact-submit w-100">
                  Register
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Submitted details preview */}
          <div className="col-12 col-lg-5">
            <div className="contact-preview">
              <div className="preview-heading">
                <i className="bi bi-card-list"></i>
                <h4>Your Details</h4>
              </div>

              <p className="preview-description">
                Preview the information entered in the registration form.
              </p>

              <div className="preview-item">
                <span>
                  <i className="bi bi-person me-2"></i>Name
                </span>
                <strong>{name || "Not entered"}</strong>
              </div>

              <div className="preview-item">
                <span>
                  <i className="bi bi-calendar3 me-2"></i>Age
                </span>
                <strong>{age || "Not entered"}</strong>
              </div>

              <div className="preview-item">
                <span>
                  <i className="bi bi-envelope me-2"></i>Email
                </span>
                <strong className="preview-value">{emailid || "Not entered"}</strong>
              </div>

              <div className="preview-item">
                <span>
                  <i className="bi bi-building me-2"></i>College
                </span>
                <strong>{colname || "Not entered"}</strong>
              </div>

              <div className="preview-note">
                <i className="bi bi-info-circle me-2"></i>
                This is a live preview. Submitting currently logs the details
                to the browser console; it does not save them to a database.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
