import React from "react";
import "./Hero.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";




const Hero = () => {
  const [showAll, setShowAll] = useState(false);

  const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      desc: "Classic Italian pizza with fresh mozzarella, tomato sauce, and basil.",
      price: "$12.99",
      img: "/ourStory.jpeg",
    },
    {
      id: 2,
      name: "Butter Chicken",
      desc: "Creamy and rich Indian curry served with soft naan bread.",
      price: "$14.99",
      img: "/butter.jpeg",
    },
    {
      id: 3,
      name: "Sushi Platter",
      desc: "Assorted sushi rolls made with fresh salmon, tuna, and avocado.",
      price: "$18.99",
      img: "/sushi.jpeg",
    },
    {
      id: 4,
      name: "Cheeseburger",
      desc: "Juicy grilled beef patty topped with melted cheese and fresh veggies.",
      price: "$10.49",
      img: "/burger.jpeg",
    },
    {
      id: 5,
      name: "Pasta Alfredo",
      desc: "Creamy fettuccine pasta tossed in rich Alfredo sauce and parmesan.",
      price: "$13.99",
      img: "/pasta.jpeg",
    },
    {
      id: 6,
      name: "Tacos",
      desc: "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      price: "$9.99",
      img: "/tacos.jpeg",
    },
  ];
  const visibleDishes = showAll ? dishes : dishes.slice(0, 3);

   
  
useEffect(() => {
  gsap.fromTo("#title", {
    y: -100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.8,
    ease: "power3.out",
  });

  gsap.to(".highlight", {
    color: "red",
    duration: 1,
    scale:2,
    ease: "power1.inOut",
    delay: 1.2,
    repeat:-1

  });

  gsap.fromTo(".story-content", {
    y: 100,
    opacity: 0,
  }, {
    opacity: 1,
    y: 0,
    duration: 1.8,
    stagger: 2,
    ease: "power3.out",});



    
}, []);

    
  
  return (
    <div className="hero-container">
      <div id="hero-top">
        {/* Banner + Title Row */}
        <section id="hero-row">
  {/* Left side: Video */}
  <div id="banner-video">
   <img src="/BannerImage.png" alt="" />
  </div>

  {/* Right side: Title */}
  <div id="title">
    <p>
      Extra-ordinary Spicy tadka with topping of Sweetness —
      <br />
      Love from <span className="highlight">DhinChak Restaurant</span> Members
    </p>
  </div>
</section>
      </div>

      {/* Special Offer Section */}

      <section id="special-offer">
      <div className="special-offer-container">
        <h2 className="section-title">Special Offer</h2>
        <div className="dishes">
          {visibleDishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <img src={dish.img} alt={dish.name} className="dish-image" />
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-description">{dish.desc}</p>
              <span className="dish-price">{dish.price}</span>
              <button className="dish-btn">Order Now</button>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <button
          className="show-more-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>

      {/* Our Story Section */}
      <section id="our-story">
        <h2>Our Story</h2>

        <div className="story-block">
          <img src="/CHEF1.jpeg" alt="Our Story" />
          <p className="story-content">
            Welcome to <span className="highlight">Taste Haven</span> — a place born out of
            passion for flavor, freshness, and unforgettable experiences. Our journey
            began in a small kitchen with a dream to bring soulful food that tells a
            story in every bite.
          </p>
        </div>

        <div className="story-block">
          <img src="/CHEF2.jpeg" alt="Baklava Dish" />
          <p className="story-content">
            Each recipe on our menu reflects a piece of our heritage, perfected with
            modern taste. From sizzling grills to warm breads baked with love,
            everything is crafted with fresh ingredients and served with a smile.
          </p>
        </div>

        <div className="story-block">
          <img src="/CHEF3.jpeg" alt="Bagel with Lox" />
          <p className="story-content">
            Today, we continue to grow — not just as a restaurant, but as a family that
            believes in connecting people through the joy of food. Come taste our story.
          </p>
        </div>

        <Link to="/about" className="discover-button">
  Discover More
</Link>
      </section>
    </div>
  );
};

export default Hero;
