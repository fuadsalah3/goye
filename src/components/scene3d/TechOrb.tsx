"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, ShaderMaterial, Vector3, Color } from "three";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const vertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  uniform float uTime;
  uniform float uProgress;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec3 pos = position;
    float displacement = sin(pos.x * 4.0 + uTime * 0.8) * cos(pos.y * 3.0 + uTime * 0.6) * sin(pos.z * 5.0 + uTime * 0.7);
    displacement *= 0.12 * (0.3 + 0.7 * uProgress);
    pos += normal * displacement;
    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  uniform float uTime;
  uniform float uProgress;
  uniform float uHover;

  void main() {
    vec3 coolBlue = vec3(0.2, 0.5, 0.9);
    vec3 gold = vec3(0.83, 0.68, 0.22);
    vec3 color = mix(coolBlue, gold, uProgress);

    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = 1.0 - abs(dot(viewDir, vNormal));
    fresnel = pow(fresnel, 2.5);

    float pulse = 0.7 + 0.3 * sin(uTime * 0.8 + uProgress * 6.28);

    color += vec3(0.5, 0.4, 0.1) * fresnel * pulse;

    float glow = fresnel * (0.5 + 0.5 * uHover);
    color += vec3(0.83, 0.68, 0.22) * glow * 0.3;

    float alpha = 0.85 + 0.15 * fresnel;
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function TechOrb() {
  const meshRef = useRef<Mesh>(null);
  const scrollProgress = useScrollProgress();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uHover: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!meshRef.current) return;
      const rect = meshRef.current.userData as { hover?: boolean };
      // Not implemented in this simple version
    };
    return;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003 * (0.5 + 0.5 * uniforms.uProgress.value);
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uProgress.value += (scrollProgress.current - uniforms.uProgress.value) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 3]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={2}
        wireframe={false}
      />
    </mesh>
  );
}
