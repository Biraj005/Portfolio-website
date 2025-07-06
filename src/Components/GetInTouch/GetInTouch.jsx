import React, { useState } from 'react';
import './GetInTouch.css';

function GetInTouch() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d95db8ef-ac9f-41e1-b6a6-9d750c5b0024");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully ✅");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div id="contact" className="main-container">
      <div className="heading">
        <span>Get In Touch</span>
      </div>

      <div className="get-in-touch-wraper">
      
        <div className="lets-talk">
          <span className="lets-talk-span">Let's Talk</span>
          <br />
          <p className="para">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on.
          </p>
          <br />
          <div className="contact-details">
            <div className="contact-details-list">
              <img src="/email.png" alt="email" />
              <span>birajroy0007@gmail.com</span>
            </div>
            <div className="contact-details-list">
              <img src="/call.png" alt="phone" />
              <span>7810941767</span>
            </div>
            <div className="contact-details-list">
              <img src="/gps.png" alt="location" />
              <span>West Bengal, India</span>
            </div>
          </div>
        </div>

        <div className="form">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="input-field"
              placeholder="Enter your name"
              required
            />
            <br />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field"
              placeholder="Enter your email"
              required
            />
            <br />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="input-field text-area"
              placeholder="Enter your message"
              required
            ></textarea>
            <br />

            <button type="submit" className="submit-btn">
              Submit
            </button>
            {result && <p className="form-status">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
