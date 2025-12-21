import React, { useEffect, useRef, useState } from "react";
import {
  FaShoppingCart,
  FaTrash,
  FaUserAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCreditCard,
} from "react-icons/fa";
import { useCart } from "./CartContext";
import gsap from "gsap";
import "./Cart.css";

// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotal
  } = useCart();

  const [userLocation, setUserLocation] = useState(null);

  // Example restaurant location (can replace with your restaurant coordinates)
  const restaurantLocation = { lat: 28.6139, lng: 77.2090 };

  useEffect(() => {
    gsap.fromTo(
      cartRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (err) => console.log("Geolocation error:", err)
      );
    }
  }, []);

  return (
    <section className="cart-section" ref={cartRef}>
      <h2 className="cart-title"><FaShoppingCart /> Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">🛒 No items added yet.</p>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ₹{getTotal()}</h3>
            </div>

            {/* Delivery Location Map */}
            <div className="delivery-map" style={{ marginTop: "2rem", height: "400px", borderRadius: "16px", overflow: "hidden" }}>
              {userLocation ? (
                <MapContainer
                  center={[restaurantLocation.lat, restaurantLocation.lng]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[restaurantLocation.lat, restaurantLocation.lng]}>
                    <Popup>Restaurant Location</Popup>
                  </Marker>
                  <Marker position={[userLocation.lat, userLocation.lng]}>
                    <Popup>Your Location</Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p style={{ color: "#ffb347", textAlign: "center", marginTop: "1rem" }}>
                  Allow location access to track your delivery
                </p>
              )}
            </div>

            <div className="checkout-section">
              <h3>Checkout Details</h3>
              <form className="checkout-form">
                <div className="input-group">
                  <FaUserAlt />
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="input-group">
                  <FaPhoneAlt />
                  <input type="text" placeholder="Phone Number" required />
                </div>
                <div className="input-group">
                  <FaMapMarkerAlt />
                  <input type="text" placeholder="Delivery Address" required />
                </div>

                <h4 className="payment-title">
                  <FaCreditCard /> Payment Method
                </h4>
                <div className="payment-options">
                  <label>
                    <input type="radio" name="payment" defaultChecked /> UPI / Paytm / Google Pay
                  </label>
                  <label>
                    <input type="radio" name="payment" /> Credit / Debit Card
                  </label>
                  <label>
                    <input type="radio" name="payment" /> Cash on Delivery
                  </label>
                </div>

                <button type="submit" className="place-order-btn">
                  🔥 Place Order 🔥
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
