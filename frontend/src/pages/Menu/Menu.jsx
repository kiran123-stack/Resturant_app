import { useState } from "react";
import { Flame, Leaf } from "lucide-react";
import "./Menu.css";
import { useCart } from "../Cart/CartContext";
// ✅ added for cart context

const menuCategories = [
  {
    title: "Starters",
    items: [
      { id: 1, name: "Paneer Tikka", price: 280, spicy: 2, veg: true, description: "Cottage cheese marinated in spices", image: "/paneer.jpeg" },
      { id: 2, name: "Chicken 65", price: 320, spicy: 3, veg: false, description: "Spicy fried chicken with curry leaves", image: "/chicken.jpeg" },
      { id: 3, name: "Veg Spring Rolls", price: 220, spicy: 1, veg: true, description: "Crispy rolls with mixed vegetables", image: "/rool.jpeg" },
      { id: 4, name: "Fish Amritsari", price: 380, spicy: 2, veg: false, description: "Deep fried fish in gram flour batter", image: "/fish.jpeg" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { id: 5, name: "Butter Chicken", price: 450, spicy: 2, veg: false, description: "Creamy tomato-based chicken curry", image: "/chicken2.jpeg" },
      { id: 6, name: "Dal Makhani", price: 320, spicy: 1, veg: true, description: "Black lentils cooked overnight", image: "/dal.jpeg" },
      { id: 7, name: "Paneer Lababdar", price: 380, spicy: 2, veg: true, description: "Cottage cheese in rich gravy", image: "/paneer1.jpeg" },
      { id: 8, name: "Mutton Rogan Josh", price: 520, spicy: 3, veg: false, description: "Kashmiri mutton curry with aromatic spices", image: "/mutton.jpeg" },
    ]
  },
  {
    title: "Breads & Rice",
    items: [
      { id: 9, name: "Garlic Naan", price: 80, spicy: 0, veg: true, description: "Tandoor-baked flatbread with garlic", image: "/garlicNaan.jpeg" },
      { id: 10, name: "Butter Naan", price: 60, spicy: 0, veg: true, description: "Classic tandoor-baked bread", image: "/butter_naan.jpeg" },
      { id: 11, name: "Biryani (Veg)", price: 350, spicy: 2, veg: true, description: "Aromatic basmati rice with vegetables", image: "/VEG2.jpeg" },
      { id: 12, name: "Biryani (Chicken)", price: 420, spicy: 2, veg: false, description: "Aromatic basmati rice with chicken", image: "/VEG.jpeg" },
    ]
  },
  {
    title: "Desserts",
    items: [
      { id: 13, name: "Gulab Jamun", price: 120, spicy: 0, veg: true, description: "Soft milk dumplings in sugar syrup", image: "/gulab.jpeg" },
      { id: 14, name: "Rasmalai", price: 140, spicy: 0, veg: true, description: "Cottage cheese patties in sweet milk", image: "/rasmalai.jpeg" },
      { id: 15, name: "Kulfi", price: 100, spicy: 0, veg: true, description: "Traditional Indian ice cream", image: "/kulfi.jpeg" },
      { id: 16, name: "Gajar Halwa", price: 130, spicy: 0, veg: true, description: "Carrot pudding with nuts", image: "/halwa.jpeg" },
    ]
  }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].title);
  const { addToCart } = useCart(); // ✅ get addToCart function from context

  const renderSpicyLevel = (level) => {
    return Array.from({ length: level }).map((_, i) => (
      <Flame key={i} className="w-4 h-4 text-red-500 inline-block" />
    ));
  };

  return (
    <section className="menu-section py-20 px-4 bg-background">
      <div className="menu-container mx-auto max-w-7xl">
        <div className="menu-header text-center mb-16 animate-fade-in">
          <h2 className="menu-title text-5xl font-bold mb-4 text-gradient-spicy">Our Menu</h2>
          <p className="menu-subtitle text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully crafted dishes, blending tradition with modern flair
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs w-full">
          <div className="tabs-list grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto bg-card/50 backdrop-blur-sm p-2">
            {menuCategories.map((category) => (
              <button
                key={category.title}
                className={`tabs-trigger text-base py-3 rounded transition-all ${
                  activeTab === category.title ? "bg-primary text-primary-foreground shadow-lg" : ""
                }`}
                onClick={() => setActiveTab(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          {menuCategories.map((category) =>
            activeTab === category.title ? (
              <div key={category.title} className="tabs-content animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="menu-card group bg-card/50 backdrop-blur-sm p-4 rounded-xl hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="menu-card-img w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="menu-card-header flex justify-between items-start gap-4 pb-3">
                        <div className="flex-1">
                          <h3 className="menu-card-title text-xl flex items-center gap-2 group-hover:text-primary transition-colors">
                            {item.name} {item.veg && <Leaf className="w-4 h-4 text-green-500" />}
                          </h3>
                          <div className="menu-card-spicy flex gap-1 mt-1">
                            {renderSpicyLevel(item.spicy)}
                          </div>
                        </div>
                        <div className="menu-card-price text-base font-bold bg-primary/10 text-primary border-primary/20 px-3 py-1 rounded-full">
                          ₹{item.price}
                        </div>
                      </div>
                      <div className="menu-card-desc text-muted-foreground">
                        {item.description}
                      </div>

                      {/* ✅ Add to Cart button (only modified line) */}
                      <button
                        onClick={() => addToCart(item)}
                        className="add-to-cart-btn"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
