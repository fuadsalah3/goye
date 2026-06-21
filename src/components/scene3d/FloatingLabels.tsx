"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Color, Group } from "three";

const labels = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "MongoDB", "Three.js", "Tailwind", "GraphQL",
];

export default function FloatingLabels() {
  const groupRef = useRef<Group>(null);

  const positions = useMemo(() => {
    return labels.map((_, i) => {
      const angle = (i / labels.length) * Math.PI * 2;
      const radius = 3.2;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius * 0.6,
        z: Math.sin(angle * 0.7) * 0.5,
        angle,
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {labels.map((label, i) => (
        <Text
          key={label}
          position={[positions[i].x, positions[i].y, positions[i].z]}
          fontSize={0.2}
          color="#A0A0A0"
          anchorX="center"
          anchorY="middle"
          fontWeight={300}
          letterSpacing={0.05}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}
