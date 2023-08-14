import React from 'react';
import { Link } from 'react-router-dom';

const ContactMe = () => {
  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <Link to="/" id='Home-Page-at-NavBar'>Home Page</Link>
      </nav>
      <div className="contact-content">
        <div className="contact-row">
          <h2>My Address:</h2>
          <p>Flat no.12,A wing,Swami Samarth Regency,Samrat Chawk,Wakad,Pune.</p>
        </div>
        <div className="contact-row">
          <h2>Contact Number:</h2>
          <p>9604108159</p>
          <p>9890502006</p>
        </div>
        <div className="contact-row">
          <h2>Gmail ID:</h2>
          <p><a href="mailto:shingnenil@gmail.com">shingnenil@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
