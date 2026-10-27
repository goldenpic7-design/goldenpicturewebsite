import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Rotating Floating 3D House Geometry
function Floating3DHouse() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Golden Glass Cube Frame */}
      <mesh>
        <boxGeometry args={[3.2, 2.4, 0.15]} />
        <meshPhysicalMaterial
          color="#E5B849"
          transmission={0.85}
          opacity={1}
          transparent
          roughness={0.15}
          metalness={0.9}
          ior={1.5}
          thickness={0.5}
          clearcoat={1}
        />
      </mesh>

      {/* House Roof Structure */}
      <mesh position={[0, 1.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.8, 1.2, 4]} />
        <meshStandardMaterial color="#C59B27" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* House Body Core */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[2.2, 1.4, 1.6]} />
        <meshStandardMaterial color="#0E1017" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Glowing Interior Windows */}
      <mesh position={[-0.5, 0.2, 0.81]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>
      <mesh position={[0.5, 0.2, 0.81]}>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>

      {/* Front Door Accent */}
      <mesh position={[0, -0.2, 0.81]}>
        <planeGeometry args={[0.4, 0.8]} />
        <meshStandardMaterial color="#E5B849" metalness={0.9} />
      </mesh>
    </group>
  );
}

// Floating Photoshop Layers Orbiting Frame
function FloatingLayers() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* RAW Layer */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8} position={[-2.4, 1.2, 0.8]}>
        <mesh rotation={[0.1, 0.3, -0.1]}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshBasicMaterial color="#475569" transparent opacity={0.65} side={THREE.DoubleSide} />
        </mesh>
      </Float>

      {/* HDR Layer */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1} position={[2.4, -0.8, 1.2]}>
        <mesh rotation={[-0.1, -0.4, 0.1]}>
          <planeGeometry args={[1.3, 0.9]} />
          <meshStandardMaterial color="#E5B849" metalness={0.8} roughness={0.2} transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      </Float>

      {/* Sky Mask Layer */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6} position={[2.2, 1.4, -0.6]}>
        <mesh rotation={[0.2, -0.2, 0.05]}>
          <circleGeometry args={[0.5, 32]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero3DCanvas() {
  return (
    <div className="w-full h-[480px] lg:h-[580px] relative">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FFF0CA" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#E5B849" />
        <pointLight position={[0, 0, 3]} intensity={1.5} color="#E5B849" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Floating3DHouse />
          <FloatingLayers />
        </Float>

        <Sparkles count={80} scale={7} size={3.5} speed={0.4} opacity={0.8} color="#E5B849" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
        />
      </Canvas>
      
      {/* Decorative Canvas Badges */}
      <div className="absolute bottom-4 left-4 glass-panel px-3 py-1.5 rounded-lg border border-[#E5B849]/30 text-[11px] font-mono text-[#E5B849] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#E5B849] animate-ping" />
        <span>Interactive 3D Spatial Canvas • Drag to Orbit</span>
      </div>
    </div>
  );
}
