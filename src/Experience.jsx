// src/Experience.jsx
import { OrbitControls } from "@react-three/drei";
import Product from "./components/Product";
import { useState } from "react";

export default function Experience() {
  const [cart, setCart] = useState([]);

  const handleProductClick = (name, price) => {
    setCart([...cart, { name, price }]);
    alert(`${name} added to cart!`);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />

      {/* Room ka GLB model load yahin kahin hoga */}

      <Product
        name="Sofa"
        price={799}
        position={[0, 0.25, 0]}
        onClick={() => handleProductClick("Sofa", 799)}
      />

      <Product
        name="Lamp"
        price={299}
        position={[1, 0.25, 1]}
        onClick={() => handleProductClick("Lamp", 299)}
      />
    </>
  );
}
