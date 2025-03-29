import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, OrbitControls } from "@react-three/drei";

import { useStates } from "react";
import "./App.css";
import Room from "./components/Room";
import Product from "./components/Product";
import CustomizePanel from "./components/CustomizePanel";
import Sidebar from "./components/Sidebar";


function App() {

  const [modelRef, setModelRef] = useState(null); // Store 3D model reference

  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };


  return (
    <div className="container">
      {/* Sidebar for Category Selection */}
      <Sidebar onAddProduct={handleAddProduct} />
      
      {/* Left Side - 3D Room */}
      <div className="room-section">
        <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          
          <Suspense fallback={null}>
            <Room />
          </Suspense>

          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              modelPath={product.modelPath}
              position={product.position}
              scale={1.5}
            />
          ))}
          
          {/* <PlayerControls /> */}
          <OrbitControls />
        </Canvas>
      </div>

      <div className="customize-section">
        <h2>Added Products</h2>
        {products.length === 0 ? <p>No products added</p> : (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.name} - ${product.price}
                <button className="delete-btn" onClick={() => handleDeleteProduct(index)}>
                  ❌ Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Right Side - Customization Panel */}
      <div className="customize-section">
        <h2>Customize Your Room</h2>
        <CustomizePanel />
      </div>
    </div>
  );
}

export default App;













