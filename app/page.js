"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingBox from "@/components/RotatingBox";
import RotatingSphere from "@/components/Circle";
import RotatingTorus from "@/components/RotatingTorus";
import TourKnot from "@/components/TourKnot";
import Leva from "@/components/leva";
import VRGame from "@/components/VrGame";
import NightScene from "@/components/NightScene";
import Scene from "@/components/360Scene";
import InteractiveScene from "@/components/InterectiveScene";

export default function Home() {
  const [showNightScene, setShowNightScene] = useState(false);

  // Toggle the NightScene visibility
  const handleNightSceneToggle = () => {
    setShowNightScene(!showNightScene);
  };

  return (
    <div style={{ textAlign: "center" }}>
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

      {/* Button to toggle NightScene */}
      <section>
        <h2>CLICK ON BUTTON TO VIEW NIGHT SCENE</h2>
        {/* <button onClick={handleNightSceneToggle} style={{ padding: "10px", margin: "10px" }}>
          {showNightScene ? "Hide Night Scene" : "Show Night Scene"}
        </button> */}

        {/* Conditionally render NightScene */}
        {showNightScene && (
          <section>
            <NightScene />
          </section>
        )}
      </section>

      <section>
        <h2>MOVE THIS IMAGE IN 360 DEGREE</h2>
        <Scene />
      </section>

      <div>
      <h1>Interactive 3D Scene</h1>
      <InteractiveScene />
    </div>
    </div>
  );
}



