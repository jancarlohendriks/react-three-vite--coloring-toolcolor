// Scene.tsx

import React, { useCallback, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

import { useColorContext } from "./Store/ColorContext";

const Scene: React.FC = () => {
  const { currentModel, pickedColor } = useColorContext();
  const gltf = useLoader(GLTFLoader, currentModel);

  const handlePointClick = useCallback(
    ({ object: { material } }) => {
      material.color.set(pickedColor);
    },
    [pickedColor]
  );

  useEffect(() => {
    // Dispose of the previous model's resources
    return () => {
      gltf.scene.traverse(child => {
        if (child instanceof Mesh) {
          const mesh = child;
          if (mesh.material) {
            // Dispose of material resources
            mesh.material.dispose();
            // Dispose of texture resources if applicable
            if (mesh.material.map) {
              mesh.material.map.dispose();
            }
          }
          // Dispose of geometry resources
          mesh.geometry.dispose();
        }
      });
    };
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} onClick={handlePointClick} />
      <ambientLight />
    </>
  );
};

export default Scene;
