import { useGLTF } from "@react-three/drei";

export default function Room() {
  const { scene } = useGLTF("/models/cozy_modern_living_room.glb");
  return <primitive object={scene} scale={1.5} />;
}
