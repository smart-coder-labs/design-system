import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface DistortionImageProps {
  imgUrl: string;
}

const DistortionMesh: React.FC<DistortionImageProps> = ({ imgUrl }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Carga la textura (la imagen que envíes por props)
  const texture = useTexture(imgUrl);
  
  // Animar el acercamiento y velocidad de distorsión
  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    // Interpolación suave del acercamiento Z al hacer hover
    const targetZ = hovered ? 1 : 0;
    mesh.current.position.z = THREE.MathUtils.lerp(mesh.current.position.z, targetZ, 0.1);
  });
  
  return (
    <mesh 
      ref={mesh} 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
      scale={[4, 3, 1]} // Relación de aspecto del plano
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      {/* MeshDistortMaterial es mágico: distorsiona los vértices con Noise */}
      <MeshDistortMaterial
        map={texture}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.5}
        distort={hovered ? 0.6 : 0} // Cantidad de distorsión
        speed={hovered ? 5 : 1}     // Velocidad de las olas de error
        color={hovered ? "#FF4500" : "white"} // Tinte base
      />
    </mesh>
  );
};

export const WebGLDistortionImage = () => {
  return (
    <div className="w-[500px] h-[400px] bg-industrial-grey/20 relative rounded-sm border border-gray-800 cursor-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <DistortionMesh imgUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" />
        </Canvas>
    </div>
  );
};
