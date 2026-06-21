"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TechOrb from "./TechOrb";
import FloatingLabels from "./FloatingLabels";
import Particles from "./Particles";
import Lighting from "./Lighting";

function SceneContent() {
  return (
    <>
      <Lighting />
      <TechOrb />
      <FloatingLabels />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </>
  );
}

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
