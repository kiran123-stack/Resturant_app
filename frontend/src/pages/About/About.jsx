import React, { useEffect, useRef } from "react";
import {
  FaUtensils,
  FaAward,
  FaWineGlassAlt,
  FaUsers,
  FaClock,
  FaWifi,
  FaParking,
  FaMusic,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const RestaurantAbout = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const specialties = [
    { icon: <FaUtensils />, title: "Farm-to-Table Cuisine", description: "Fresh organic ingredients sourced daily from local farms, crafted into unforgettable dishes." },
    { icon: <FaAward />, title: "Award-Winning Chefs", description: "Our culinary artists bring decades of Michelin-starred experience to your table." },
    { icon: <FaWineGlassAlt />, title: "Premium Wine Collection", description: "Over 200 world-class wines curated to perfectly pair with your dining experience." },
    { icon: <FaUsers />, title: "Private Dining Rooms", description: "Elegant, intimate settings for your celebrations, business dinners, and memorable nights." },
  ];

  const facilities = [
    { icon: <FaClock />, text: "Open 7 Days", subtext: "11 AM - 11 PM" },
    { icon: <FaWifi />, text: "Free WiFi", subtext: "Stay connected" },
    { icon: <FaParking />, text: "Valet Parking", subtext: "Complimentary" },
    { icon: <FaMusic />, text: "Live Jazz Nights", subtext: "Thu-Sat Evenings" },
  ];

  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section ref={(el) => (sectionsRef.current[0] = el)} className="about-hero-section">
        <img src="/Background.jpeg" alt="Fine Dining" className="about-hero-bg" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">DHINCHAK FOOD</h1>
          <p className="about-hero-subtitle">Where Every Dish Tells a Story</p>
        </div>
      </section>

      <div className="about-main-container">
        {/* Legacy Section */}
        <section ref={(el) => (sectionsRef.current[1] = el)} className="about-legacy-section">
          <div className="about-legacy-image">
            <img src="/CHEF1.jpeg" alt="Chef Preparing" />
          </div>
          <div className="about-legacy-text">
            <h2 className="about-section-title">Our Legacy</h2>
            <p>Since 1985, Savoria has been redefining fine dining by blending timeless recipes with innovative techniques. Each plate is a narrative of passion, precision, and artistry.</p>
            <p>Our philosophy is simple — serve food that touches the soul. Every meal is a memory in the making.</p>
          </div>
        </section>

        {/* Specialties & Facilities Combined */}
        <section ref={(el) => (sectionsRef.current[2] = el)} className="about-specialties-facilities-section">
          <h2 className="about-section-title center">What We're Famous For</h2>
          <div className="about-specialties-grid">
            {specialties.map((item, index) => (
              <div key={index} className="about-specialty-card">
                <div className="about-specialty-icon">{item.icon}</div>
                <h3 className="about-specialty-title">{item.title}</h3>
                <p className="about-specialty-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="about-section-title center">Premium Facilities</h2>
          <div className="about-facilities-grid">
            {facilities.map((f, i) => (
              <div key={i} className="about-facility-card">
                <div className="about-facility-icon">{f.icon}</div>
                <h4 className="about-facility-title">{f.text}</h4>
                <p className="about-facility-subtext">{f.subtext}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="about-cta-section">
            <Link to="/Reservation" className="about-cta-button">Reserve Your Table</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RestaurantAbout;
