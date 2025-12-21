import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUserFriends,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import "./Reservation.css";

const initialFormData = {
  date: "",
  time: "19:00",
  guests: 2,
  name: "",
  email: "",
  phone: "",
};

const ReservationInput = ({
  icon: Icon,
  id,
  label,
  type = "text",
  value,
  onChange,
  min,
  max,
  required = true,
}) => {
  return (
    <div className="reservation-group">
      <label htmlFor={id} className="reservation-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <div className="reservation-input-wrapper">
        <Icon className="reservation-icon" />
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          required={required}
          className="reservation-input"
        />
      </div>
    </div>
  );
};

const ReservationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateForm = () => {
    const { date, name, email, phone, guests } = formData;
    if (!date || !name || !email || !phone || guests < 1) {
      setError("Please fill in all required fields properly.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setError("Reservation date must be today or in the future.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsConfirmed(true);
    }
  };

  if (isConfirmed) {
    return (
      <div className="confirmation-section">
        <div className="confirmation-card">
          <FaCheckCircle className="confirmation-icon" />
          <h2 className="confirmation-title">Reservation Confirmed!</h2>
          <p className="confirmation-message">
            Thank you, <span>{formData.name}</span> — your table is booked!
          </p>
          <div className="confirmation-details">
            <p>
              <strong>Date:</strong> {new Date(formData.date).toDateString()}
            </p>
            <p>
              <strong>Time:</strong> {formData.time}
            </p>
            <p>
              <strong>Guests:</strong> {formData.guests}
            </p>
          </div>
          <button
            className="confirmation-btn"
            onClick={() => setIsConfirmed(false)}
          >
            Book Another Table
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-wrapper">
      <div className="reservation-card">
        {/* Left Side Image */}
        <div className="reservation-image-side">
          <img
            src="/AboutImage.png"
            alt="Elegant Dining"
            className="reservation-image"
          />
          <div className="image-overlay">
            <h2 className="overlay-title">Fine Dining Awaits</h2>
            <p className="overlay-subtitle">
              Book your seat for a luxurious culinary experience.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="reservation-form-side">
          <div className="reservation-header">
            <h1>Reserve Your Table</h1>
            <p>Plan your special evening — select your date and time below.</p>
          </div>

          {error && <div className="reservation-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="reservation-grid">
              <ReservationInput
                icon={FaCalendarAlt}
                id="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
              <ReservationInput
                icon={FaClock}
                id="time"
                label="Time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
              <ReservationInput
                icon={FaUserFriends}
                id="guests"
                label="Guests"
                type="number"
                min="1"
                max="12"
                value={formData.guests}
                onChange={handleChange}
              />
            </div>

            <h2 className="contact-header">Contact Information</h2>

            <ReservationInput
              icon={FaUser}
              id="name"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <ReservationInput
              icon={FaEnvelope}
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <ReservationInput
              icon={FaPhone}
              id="phone"
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />

            <button type="submit" className="reservation-btn">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
