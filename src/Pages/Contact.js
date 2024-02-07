import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="contact container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 contactLabel">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 contactLabel">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your e-mail"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 contactLabel">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Your message"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
