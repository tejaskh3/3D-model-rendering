import React from "react";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ModelCard(props) {
  return (
    <>
      <div className="model">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} castShadow="true" />
          <OrbitControls autoRotate="true" autoRotateSpeed={10} />
          <mesh>
            <Model modelName={props.name} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}
