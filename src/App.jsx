/*import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PointerLockControls,
  OrbitControls
} from "@react-three/drei";
import "./App.css";
import Room from "./components/Room";
import Product from "./components/Product";

function PlayerControls() {
  const controlsRef = useRef();
  return <PointerLockControls ref={controlsRef} />;
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Suspense fallback={null}>
          <Room />
          <Product
            name="Sneakers"
            price="999"
            modelPath="/models/sneaker_model.glb"
            position={[2, 0, 0]}
            scale={1.5}
          />
          <Product
            name="Backpack"
            price="1499"
            modelPath="/models/backpack_model.glb"
            position={[-2, 0, 1]}
            scale={1.2}
          />
        </Suspense>

        <PlayerControls />
        <OrbitControls />
      </Canvas>
      <div className="instructions">
        Click to enter, use W/A/S/D to move, click product to add to cart
      </div>
    </div>
  );
}

export default App;
*/




/*
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, OrbitControls } from "@react-three/drei";
import "./App.css";
import Room from "./components/Room";
import Product from "./components/Product";
import CustomizePanel from "./components/CustomizePanel"; // Import customization panel

function PlayerControls() {
  const controlsRef = useRef();
  return <PointerLockControls ref={controlsRef} />;
}

function App() {
  return (
    <div className="container">
      {Left Side - 3D Room}
      <div className="room-section">
        <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          <Suspense fallback={null}>
            <Room />
            <Product
              name="Sneakers"
              price="999"
              modelPath="/models/sneaker_model.glb"
              position={[2, 0, 0]}
              scale={1.5}
            />
            <Product
              name="Backpack"
              price="1499"
              modelPath="/models/backpack_model.glb"
              position={[-2, 0, 1]}
              scale={1.2}
            />
          </Suspense>

          <PlayerControls />
          <OrbitControls />
        </Canvas>
      </div>

      {Right Side - Customization Panel}
      <div className="customize-section">
        <CustomizePanel />
      </div>
    </div>
  );
}

export default App;
*/









import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, OrbitControls } from "@react-three/drei";
import "./App.css";
import Room from "./components/Room";
import Product from "./components/Product";
import CustomizePanel from "./components/CustomizePanel"; // Customization Panel
import Sidebar from "./components/Sidebar"; // Add Sidebar Component

function PlayerControls() {
  const controlsRef = useRef();
  return <PointerLockControls ref={controlsRef} />;
}

function App() {
  return (
    <div className="container">
      {/* Sidebar for Category Selection */}
      <Sidebar />

      {/* Left Side - 3D Room */}
      <div className="room-section">
        <Canvas camera={{ position: [0, 1.6, 5], fov: 75 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          <Suspense fallback={null}>
            <Room />
            <Product
              name="Sneakers"
              price="999"
              modelPath="/models/sneaker_model.glb"
              position={[2, 0, 0]}
              scale={1.5}
            />
            <Product
              name="Backpack"
              price="1499"
              modelPath="/models/backpack_model.glb"
              position={[-2, 0, 1]}
              scale={1.2}
            />
          </Suspense>

          <PlayerControls />
          <OrbitControls />
        </Canvas>
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















