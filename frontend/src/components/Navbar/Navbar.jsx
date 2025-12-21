import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { 
  FaHome, 
  FaConciergeBell, 
  FaInfoCircle, 
  FaCalendarCheck, 
  FaPhoneAlt, 
  FaShoppingCart, 
  FaUser 
} from "react-icons/fa";
import './Navbar.css';
import { useCart } from '../../pages/Cart/CartContext';
import { useNavigate } from "react-router-dom"; 



const navLinks = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "Menu", href: "/menu", icon: <FaConciergeBell /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Reservation", href: "/reservation", icon: <FaCalendarCheck /> },
  { name: "Contact", href: "/contact", icon: <FaPhoneAlt /> },
];

const Navbar = ({ onLoginClick, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { totalQuantity } = useCart(); // ✅ useCart hook for cart count

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // ✅ Handle Cart click logic (works for both desktop & mobile)
   const handleCartClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      onLoginClick(); // 👈 trigger login popup from Home.jsx
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            Dhinchak Food
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="navbar-link">
                <span className="icon">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            {/* ✅ Cart Icon with count */}
            <button onClick={handleCartClick} className="navbar-link relative">
              <span className="icon"><FaShoppingCart /></span>
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </button>

            {/* Login / User */}
            {!isLoggedIn && (
              <button className="navbar-cta" onClick={onLoginClick}>
                <FaUser /> Login
              </button>
            )}
            {isLoggedIn && <span>Welcome User</span>}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-button"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="navbar-mobile-link"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="icon">{link.icon}</span>
                {link.name}
              </Link>
            ))}

            {/* ✅ Cart link for mobile */}
            <button
              onClick={(e) => {
                handleCartClick(e);
                setIsOpen(false);
              }}
              className="navbar-mobile-link relative"
            >
              <span className="icon"><FaShoppingCart /></span>
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge-mobile">{totalQuantity}</span>
              )}
            </button>

            <div className="navbar-mobile-actions">
              {!isLoggedIn && (
                <button className="navbar-mobile-cta" onClick={onLoginClick}>
                  <FaUser /> Login
                </button>
              )}
              {isLoggedIn && <span>Welcome User</span>}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
