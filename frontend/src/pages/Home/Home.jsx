import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Menu from '../Menu/Menu';
import ReservationForm from '../Reservation/Reservation';
import RestaurantFooter from '../../components/Footer/Footer';
import './Home.css';
import { FaEnvelope, FaLock, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === 'user@example.com' && password === '123456'){
      setIsLoggedIn(true);
      setShowLogin(false);
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      <Navbar onLoginClick={() => setShowLogin(true)} isLoggedIn={isLoggedIn} />

      {showLogin && !isLoggedIn && (
        <div className="login-overlay">
          <form className="login-box" onSubmit={handleLogin}>
            {/* Heading with icon */}
            <div className="login-header">
              <FaUserCircle size={50} color="#355c7d"/>
              <h2>Welcome Back!</h2>
              <p>Login to continue</p>
            </div>

            {/* Email input */}
            <div className="input-group">
              <FaEnvelope className="icon"/>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password input */}
            <div className="input-group">
              <FaLock className="icon"/>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">Login</button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {isLoggedIn && (
        <div className="cart-button-container">
          <button onClick={() => navigate('/cart')}>
            <FaShoppingCart style={{marginRight: '8px'}} /> Go to Cart
          </button>
        </div>
      )}

      <Hero/>
      <Menu/>
      <ReservationForm/>
      <RestaurantFooter/>
    </div>
  );
};

export default Home;
