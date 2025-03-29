// import React, { useState } from "react";
// import "./Sidebar.css"; // ✅ CSS import

// const categories = [
//   { name: "DESK", image: "/images/desk.png" },
//   { name: "SHOES", image: "/images/Shoes.png" },
//   { name: "T-Shirt", image: "/images/T-shirt.png" },
//   { name: "SHIRT", image: "/images/Shirt.png" },
//   { name: "Laptop", image: "/images/Laptop.png" }
//   // ⚡ Apni images ke path add karein
// ];

// const Sidebar = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // 🔍 Search filter logic
//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">🛒 Categories</h2>

//       {/* 🔍 Search Box */}
//       <input
//         type="text"
//         placeholder="Search categories..."
//         className="search-box"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <ul>
//         {filteredCategories.map((category, index) => (
//           <li
//             key={index}
//             className={`sidebar-item ${selectedCategory?.name === category.name ? "active" : ""}`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category.name}
//             {selectedCategory?.name === category.name && (
//               <img src={category.image} alt={category.name} className="category-image fade-in" />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState, useRef, useEffect } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import "./Sidebar.css";

const categories = [
  { 
    name: "DESK", 
    modelPath: "/models/sneaker_model.glb"
  },
  { 
    name: "SHOES", 
    modelPath: "/models/sneaker_model.glb"
  },
  { 
    name: "T-Shirt", 
    modelPath: "/models/sneaker_model.glb"
  },
  { 
    name: "SHIRT", 
    modelPath: "/models/sneaker_model.glb"
  },
  { 
    name: "Laptop", 
    modelPath: "/models/sneaker_model.glb"
  }
];

const Sidebar = ({ onAddProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const canvasRef = useRef(null);

  // Search filter logic
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (selectedCategory && canvasRef.current) {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 2;

      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        antialias: true 
      });
      renderer.setSize(225, 250);
      renderer.setClearColor(0xffffff, 1);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // GLTF Loader
      const loader = new GLTFLoader();
      loader.load(
        selectedCategory.modelPath,
        (gltf) => {
          const model = gltf.scene;
          
          // Scale and position model
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scaleFactor = 1 / maxDim;
          
          model.scale.set(scaleFactor, scaleFactor, scaleFactor);
          model.position.set(0, 0, 0);
          
          scene.add(model);

          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
          };
          animate();
        },
        undefined,
        (error) => {
          console.error('Error loading model:', error);
        }
      );

      // Cleanup
      return () => {
        renderer.dispose();
      };
    }
  }, [selectedCategory]);

  const handleAddToRoom = () => {
    if (!selectedCategory) return;

    const title = prompt("Enter product title:");
    if (!title) return;
    
    const price = prompt("Enter product price:");
    if (!price) return;

    onAddProduct({
      name: title,
      price: price,
      modelPath: selectedCategory.modelPath,
      position: [Math.random() * 2 - 1, 0, Math.random() * 2 - 1] // Random position
    });
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">🛒 Categories</h2>

      {/* Search Box */}
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
              <>
                <canvas ref={canvasRef} className="category-3d-model fade-in" />
                <button className="add-to-room-btn" onClick={handleAddToRoom}>
                  ➕ Add to Room
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
