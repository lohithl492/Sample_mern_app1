import { useState } from "react";

function Contact() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">

          <h2 className="text-center mb-4">Contact</h2>

          <form onSubmit={handleSubmit}>
            <div className="row align-items-center mb-3">
              <label htmlFor="name" className="col-3 col-form-label">
                Name
              </label>
              <div className="col-9">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <label htmlFor="age" className="col-3 col-form-label">
                Age
              </label>
              <div className="col-9">
                <input
                  id="age"
                  type="number"
                  className="form-control"
                  placeholder="Enter age"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <label htmlFor="email" className="col-3 col-form-label">
                Email
              </label>
              <div className="col-9">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-9 offset-3">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
