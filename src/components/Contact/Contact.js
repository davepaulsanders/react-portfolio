import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.nextSibling.textContent = "This field is required!";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name) {
      document.querySelector("#nameHelp").textContent =
        "Please provide a name!";
    }
    if (!email) {
      document.querySelector("#emailHelp").textContent =
        "Please provide an email!";
    }
    if (!message) {
      document.querySelector("#messageHelp").textContent =
        "Please include a message!";
    }

    const send = await emailjs.sendForm(
      "service_fscmbir",
      "template_upsya8q",
      form.current,
      "ouxzFEItJsnRZeZ_d"
    );
    if (send.status === 200) {
      document.querySelector("#sentMessage").textContent = "Sent!";
    } else {
      document.querySelector("#sentMessage").classList.remove("text-white");
      document.querySelector("#sentMessage").classList.remove("text-danger");
      document.querySelector("#sentMessage").textContent =
        "Something went wrong, please try again!";
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className="contact-title">Contact</h2>

      <form
        ref={form}
        className="contact-form"
        id="contact-form"
        name="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            className="form-control mb-2"
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
            className="form-control  mb-2"
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
        <small id="sentMessage" className="form-text text-white"></small>
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
