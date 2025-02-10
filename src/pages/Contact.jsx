import React from "react";
const handleFormSubmit = (formData) => {
  console.log(formData.entries());
  const forminputData = Object.fromEntries(formData.entries());
  console.log(forminputData);
};
function Contact() {
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form className="form-contact" action={handleFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            autoComplete="false"
            name="username"
            required
            className="form-control"
          />

          <input
            type="email"
            placeholder="Email"
            autoComplete="false"
            name="email"
            required
            className="form-control"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
          ></textarea>

          <button type="submit" className="btn submit-btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
