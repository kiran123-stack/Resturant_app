import React from "react";
import { Routes, Route } from "react-router-dom";
import  { useState } from "react";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Reservation from "./pages/Reservation/Reservation";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./pages/Cart/CartContext"; // import context
import Navbar from "./components/Navbar/Navbar";

const App = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => setShowLogin(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    // ✅ Redirect to cart after successful login
    window.location.href = "/cart";
  };
  return (
     

    <CartProvider>
       <Navbar onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    
  );
};

export default App;
