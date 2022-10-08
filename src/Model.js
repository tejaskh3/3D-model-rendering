import React from "react";
import { useFBX } from "@react-three/drei";

export default function Model(props) {
  const fbx = useFBX(props.modelName);
  return <primitive object={fbx} scale={0.25} />;
}
