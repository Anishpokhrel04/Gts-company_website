import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-form  ">
      <h1>Contact Us</h1>
      <div className="container">
        <div className="main">
          <div className="content">
            <h2>Contact Us</h2>
            <form >
              <input type="text" name="name" placeholder="Enter Your Name" />

              <input type="email" name="name" placeholder="Enter Your Email" />
              <textarea name="message" placeholder="Your Message" style={{padding:"14px 20px"}}/>
              <button type="submit" className="btn">
                Send <i ><FaPaperPlane/></i>
              </button>
            </form>
          </div>
          <div className="form-img">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
