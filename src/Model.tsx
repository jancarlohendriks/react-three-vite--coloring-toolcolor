/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useColorContext } from "./store/ColorContext";
import { useModelContext } from "./store/ModelContext";

type GLTFResult = GLTF & {
  nodes: {
    ["Cycling-raglan-short-sleeve-fullzip-rev3"]: THREE.Mesh;
    ["Cycling-raglan-short-sleeve-fullzip-rev3_1"]: THREE.Mesh;
    ["Cycling-raglan-short-sleeve-fullzip-rev3_2"]: THREE.Mesh;
  };
  materials: {
    ROOD: THREE.MeshStandardMaterial;
    BLAUW: THREE.MeshStandardMaterial;
    ROZE: THREE.MeshStandardMaterial;
  };
};

// TODO: Instead of loading all models --> PERFORMANCE
// USE https://gltf.pmnd.rs/
// Convert all delivered models to React component and use the meshes in the groups to select which model is active

export function Model(props: any) {
  const { pickedColor } = useColorContext();
  const { nodes, materials } = useGLTF("/jersey-transformed.glb") as GLTFResult;
  const { currentModel } = useModelContext();

  const handlePointClick = (e: any) => {
    e.stopPropagation();
    e.object.material.color.set(pickedColor);
  };

  return (
    <group {...props} dispose={null}>
      <group position={[4.076, 3.571, -1.005]} rotation={[1.89, 0.881, -2.045]}>
        <pointLight intensity={1000} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[7.359, 2.625, 6.926]} rotation={[1.242, 0.33, -0.76]}>
        <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.895} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, -2.333, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.002} onClick={handlePointClick}>
        {currentModel == "Option 1" && (
          <>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cycling-raglan-short-sleeve-fullzip-rev3"].geometry}
              material={materials.ROOD}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cycling-raglan-short-sleeve-fullzip-rev3_1"].geometry}
              material={materials.BLAUW}
            />
          </>
        )}
        {currentModel == "Option 2" && (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cycling-raglan-short-sleeve-fullzip-rev3_2"].geometry}
            material={materials.ROZE}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload("/jersey-transformed.glb");
