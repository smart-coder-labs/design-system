import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const TunnelScene = () => {
    const tubeRef = useRef<THREE.Mesh>(null);
    const scroll = useScroll();
    
    useFrame((state) => {
        if (!tubeRef.current) return;
        
        // Empujamos la geometría hacia nosotros infinitamente basada en el tiempo y el scroll
        // scroll.offset de 0 a 1 dicta la velocidad de entrada.
        const speed = 0.05 + (scroll.offset * 0.5); 
        
        tubeRef.current.position.z += speed;
        
        // Efecto infinito: Cuando el tubo se acerca mucho a la cámara, lo reseteamos hacia atrás.
        // Dado que es un tubo continuo, el ojo humano no nota el reset.
        if (tubeRef.current.position.z > 20) {
            tubeRef.current.position.z = 0;
        }
        
        // Una ligera rotación para dar vértigo sobre su propio eje de profundidad (Y local en un cilindro)
        tubeRef.current.rotation.y -= 0.002;
    });
    
    return (
        <group>
            {/* Cilindro masivo (Radio 5, Longitud 40) */}
            <mesh ref={tubeRef} position={[0, 0, -10]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[5, 5, 40, 8, 40, true]} />
                <meshBasicMaterial 
                    color="#FF4500" 
                    wireframe={true} 
                    transparent 
                    opacity={0.3} 
                />
            </mesh>
        </group>
    );
};

export const WebGLTunnel = () => {
    return (
        <div className="w-full h-[150vh] bg-white dark:bg-zinc-950 flex items-center justify-center relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* 
                      Efecto de Niebla (Fog) indispensable para que al fondo 
                      del túnel desaparezca en oscuridad pura y no corte feo
                    */}
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <fog attach="fog" args={['#050505', 0, 30]} />
                        <ScrollControls pages={4}> 
                            <TunnelScene />
                        </ScrollControls>
                    </Canvas>
                </div>
                
                <div className="relative z-10 pointer-events-none text-center transform translate-y-10">
                    <h2 className="text-zinc-900 dark:text-white text-7xl font-[family-name:var(--font-sans)] tracking-[0.2em] mix-blend-exclusion">
                        DESCENDING ALGORITHM
                    </h2>
                    <p className="text-blue-500 mt-4 font-[family-name:var(--font-sans)] tracking-tight text-sm ">
                        Scroll down to breach the mainframe
                    </p>
                </div>
            </div>
        </div>
    );
}
