import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUtensils
} from 'react-icons/fa';
import './Footer.css';


const RestaurantFooter=() =>{
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
    // Add your subscription logic here
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Dine In', path: '/dine-in' },
    { name: 'Takeaway', path: '/takeaway' },
    { name: 'Catering', path: '/catering' },
    { name: 'Private Events', path: '/events' },
    { name: 'Gift Cards', path: '/gift-cards' },
    { name: 'Careers', path: '/careers' }
  ];

  const openingHours = [
    { day: 'Monday - Friday', time: '11:00 AM - 11:00 PM' },
    { day: 'Saturday - Sunday', time: '10:00 AM - 12:00 AM' },
    { day: 'Happy Hours', time: '4:00 PM - 7:00 PM' }
  ];

  return (
    <footer className="footer-wrapper">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <FaUtensils className="footer-logo-icon" />
              <h2 className="footer-logo-text">Dhinchak Food</h2>
            </div>
            <p className="footer-tagline">
              Where culinary artistry meets exceptional dining. Experience the finest flavors crafted with passion and served with elegance.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.path} className="footer-link">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <p>123 Gourmet Street, Culinary District<br />New York, NY 10001</p>
              </div>
              <div className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <p>info@savoria.com</p>
              </div>
            </div>

            <div className="footer-hours">
              <h4 className="footer-hours-title">
                <FaClock className="footer-hours-icon" />
                Opening Hours
              </h4>
              {openingHours.map((schedule, index) => (
                <div key={index} className="footer-hours-item">
                  <span className="footer-hours-day">{schedule.day}</span>
                  <span className="footer-hours-time">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="footer-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
              <p className="newsletter-subtitle">Get exclusive offers, recipes, and dining updates delivered to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                onClick={handleSubscribe}
                className="newsletter-button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Savoria Restaurant. All Rights Reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <span className="footer-divider">|</span>
              <a href="/cookies" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default RestaurantFooter;