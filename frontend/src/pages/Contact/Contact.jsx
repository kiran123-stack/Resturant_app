import React from 'react';
import './Contact.css';
 import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import Navbar from '../../components/Navbar/Navbar';

const MailIcon = () => <FiMail className="contact__icon" />;
const UserIcon = () => <FiUser className="contact__icon" />;
const MessageIcon = () => <FiMessageSquare className="contact__icon" />;

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted!');
  };

  return (
    <div className="contact-page__container">
        <Navbar/>
      {/* ========================================
        1. Image Side
        ========================================
      */}
      <div className="contact__image-section">
        <img
          src="/AboutImage.png"
          alt="Abstract image representing contact and connection"
          className="contact__image"
        />
        {/* Optional: Add a title or brief message over the image */}
        <div className="contact__image-overlay">
          <h2 className="contact__image-title">Let's Connect</h2>
        </div>
      </div>

      {/* ========================================
        2. Form Side
        ========================================
      */}
      <div className="contact__form-section">
        <h1 className="contact__form-title">Send Us a Message</h1>
        <p className="contact__form-subtitle">
          We'd love to hear from you! Fill out the form below.
        </p>
        
        <form className="contact__form" onSubmit={handleSubmit}>
          
          {/* Name Input Field */}
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">Name</label>
            <div className="contact__input-wrapper">
              <UserIcon />
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          {/* Email Input Field */}
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">Email</label>
            <div className="contact__input-wrapper">
              <MailIcon />
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder="youremail@example.com"
                required
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">Message</label>
            <div className="contact__input-wrapper contact__input-wrapper--textarea">
              <MessageIcon />
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="contact__submit-button">
            Send Message
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactPage;