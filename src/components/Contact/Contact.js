import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.nextSibling.textContent = "This field is required!";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.querySelector("#contact-form");
    // creating FormData
    const messageForm = new FormData(form);
    const entries = messageForm.entries();
    const data = Object.fromEntries(entries);

    if (!data.name) {
      document.querySelector("#nameHelp").textContent =
        "Please provide a name!";
    }
    if (!data.email) {
      document.querySelector("#emailHelp").textContent =
        "Please provide an email!";
    }
    if (!data.message) {
      document.querySelector("#messageHelp").textContent =
        "Please include a message!";
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="contact-title">Contact</h2>

      <form
        action="mailto:davepaulsanders@gmail.com"
        method="POST"
        encType="text/plain"
        className="contact-form py-4 px-3"
        id="contact-form"
        name="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Name"
            aria-describedby="nameHelp"
            name="name"
            onBlur={handleBlur}
          />
          <small id="nameHelp" className="form-text text-danger"></small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onBlur={handleBlur}
          />
          <small id="emailHelp" className="form-text text-danger"></small>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="message"
            className="form-control"
            id="message"
            placeholder="Reach out!"
            aria-describedby="messageHelp"
            name="message"
            onBlur={handleBlur}
          />
          <small id="messageHelp" className="form-text text-danger"></small>
        </div>
        <button
          type="submit"
          className="btn btn-secondary btn-block w-100 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
