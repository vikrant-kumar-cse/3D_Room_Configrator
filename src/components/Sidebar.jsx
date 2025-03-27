import React, { useState } from "react";
import "./Sidebar.css"; // ✅ CSS import

const categories = [
  { name: "DESK", image: "/images/desk.png" },
  { name: "SHOES", image: "/images/Shoes.png" },
  { name: "T-Shirt", image: "/images/T-shirt.png" },
  { name: "SHIRT", image: "/images/Shirt.png" },
  { name: "Laptop", image: "/images/Laptop.png" }
  // ⚡ Apni images ke path add karein
];

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Search filter logic
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">🛒 Categories</h2>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search categories..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredCategories.map((category, index) => (
          <li
            key={index}
            className={`sidebar-item ${selectedCategory?.name === category.name ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
            {selectedCategory?.name === category.name && (
              <img src={category.image} alt={category.name} className="category-image fade-in" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
