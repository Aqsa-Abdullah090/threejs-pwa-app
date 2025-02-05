"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import RotatingBox from "@/components/RotatingBox";
import RotatingSphere from "@/components/Circle";
import RotatingTorus from "@/components/RotatingTorus";
import TourKnot from "@/components/TourKnot";
import Leva from "@/components/leva";
import VRGame from "@/components/VrGame";

export default function Home() {
  return (
    <div>
      <section>
        <Canvas style={{ width: "90vw", height: "95vh" }}>
          {/* Add lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />

          {/* 3D objects */}
          <RotatingBox position={[2, 0, 0]} args={[1, 1, 1]} color="orange" />
          <RotatingBox position={[-2, 0, 0]} args={[1, 1, 1]} color="orange" />
          <RotatingBox position={[2, 4, 0]} args={[1, 2, 0]} color="orange" />
          <RotatingBox position={[2, -4, 0]} args={[1, 2, 0]} color="orange" />

          {/* 3D Sphere and Torus */}
          <RotatingSphere position={[0, 2, 0]} radius={1} color="blue" />
          <RotatingTorus position={[0, -2, 0]} radius={2} tube={0.5} color="green" />
        </Canvas>
      </section>
      <section>
        <TourKnot />
      </section>
      <section>
        <Leva />
      </section>
      <section>
        <VRGame />
      </section>
    </div>
  );
}

