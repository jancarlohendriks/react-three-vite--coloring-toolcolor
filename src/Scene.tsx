// Scene.tsx

import React, { useCallback } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useColorContext } from "./ColorContext";
import model from "@/assets/jersey.gltf?url";

const Scene: React.FC = () => {
  const gltf = useLoader(GLTFLoader, model);
  const { pickedColor } = useColorContext()!;

  const handlePointClick = useCallback(
    ({ object: { material } }) => {
      material.color.set(pickedColor);
    },
    [pickedColor]
  );

  return (
    <>
      <primitive object={gltf.scene} onClick={handlePointClick} />
      <ambientLight />
    </>
  );
};

export default Scene;
