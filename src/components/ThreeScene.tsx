import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#646cff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedTorus = () => {
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <MeshWobbleMaterial color="#535bf2" factor={1} speed={2} />
      </mesh>
    </Float>
  );
};

const ThreeScene = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 1, // ปรับให้มาอยู่ด้านหน้าพื้นหลัง grid แต่ยังอยู่หลังข้อความ
      pointerEvents: 'none' 
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 1, 1]} intensity={2.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#646cff" />
        
        {/* โมเดลทรงกลมหลักที่บิดเบี้ยวได้ */}
        <AnimatedSphere />
        
        {/* วงแหวนล้อมรอบเพิ่มความลึก */}
        <AnimatedTorus />
        <Float speed={3} rotationIntensity={1.5}>
          <mesh rotation={[0, 0, Math.PI / 6]}>
            <torusGeometry args={[2.5, 0.01, 16, 100]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
