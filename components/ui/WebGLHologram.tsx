import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

// Cantidad de partículas del holograma
const PARTICLE_COUNT = 3000;

const SwarmHologram = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scroll = useScroll(); // Nos da el progreso del scroll dentro de R3F
  
  // Pre-calculamos la posición de las partículas en el caos (esparcidas) y en el orden (esfera)
  const { positions, randomPositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const randPos = new Float32Array(PARTICLE_COUNT * 3);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Orden (Esfera Perfecta de Radio 2)
        const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
        const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
        
        pos[i * 3] = 2 * Math.cos(theta) * Math.sin(phi);
        pos[i * 3 + 1] = 2 * Math.sin(theta) * Math.sin(phi);
        pos[i * 3 + 2] = 2 * Math.cos(phi);
        
        // Caos (Cubo gigante de rango -10 a 10)
        randPos[i * 3] = (Math.random() - 0.5) * 20;
        randPos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        randPos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return { positions: pos, randomPositions: randPos };
  }, []);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // scroll.offset va de 0 a 1 indicando el progreso del scroll en esta sección
    const progress = scroll.offset; 
    
    // Interpolamos matemáticamente entre el CAOS y el ORDEN basándonos en el Scroll
    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for(let i = 0; i < PARTICLE_COUNT * 3; i++) {
        currentPositions[i] = THREE.MathUtils.lerp(
            randomPositions[i], 
            positions[i], 
            progress // Si es 0 es caos, si es 1 forman la esfera perfecta
        );
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotación suave del conjunto infinitamente
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x += 0.001;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
            attach="attributes-position" 
            count={PARTICLE_COUNT} 
            array={randomPositions} 
            itemSize={3}
            args={[randomPositions, 3]}
        />
      </bufferGeometry>
      {/* Material Hacker: Puntos cuadrados de color verde ácido glow */}
      <pointsMaterial 
        size={0.05} 
        color="#39FF14" 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Componente Wrapper (Exportable al DOM normal)
export const WebGLHologram = () => {
    return (
        <div className="w-full h-screen bg-white dark:bg-zinc-950">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                {/* ScrollControls de Drei crea un contenedor de scroll HTML falso de "3 páginas" de alto */}
                <ScrollControls pages={3} damping={0.2}>
                    <SwarmHologram />
                </ScrollControls>
            </Canvas>
        </div>
    );
}
