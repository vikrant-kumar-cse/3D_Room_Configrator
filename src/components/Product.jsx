import { useGLTF, Html } from "@react-three/drei";

export default function Product({ name, price, modelPath, position, scale = 1 }) {
  const { scene } = useGLTF(modelPath);

  const handleClick = () => {
    alert(`🛍️ ${name} added to cart!`);
  };

  return (
    <group position={position} scale={scale} onClick={handleClick}>
      <primitive object={scene} />
      <Html distanceFactor={10} position={[0, 1, 0]}>
        <div className="product-label">
          <strong>{name}</strong><br />
          ₹{price}
        </div>
      </Html>
    </group>
  );
}
