import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ColorProvider } from "./ColorContext";
import Scene from "./Scene";
import ColorPickerOverlay from "./ColorPickerOverlay";

const App = () => {
  return (
    <ColorProvider>
      <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
        <OrbitControls />
        <Scene />
      </Canvas>
      <ColorPickerOverlay />
    </ColorProvider>
  );
};

export default App;

// import React, { useState, useCallback } from "react";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { ChromePicker } from "react-color";
// const { Canvas } = await import("@react-three/fiber");
// const { OrbitControls } = await import("@react-three/drei");
// import model from "@/assets/jersey.gltf?url";

// const Scene = ({ pickedColor }) => {
//   const gltf = useLoader(GLTFLoader, model);
//   const [selectedMaterial, setSelectedMaterial] = useState(null);

//   const handlePointClick = useCallback(
//     ({ object: { material } }) => {
//       if (!selectedMaterial) {
//         setSelectedMaterial({
//           material,
//           originalColor: material.color.clone(),
//         });
//       }
//       material.color.set(pickedColor);
//     },
//     [selectedMaterial, pickedColor]
//   );

//   return (
//     <>
//       <primitive object={gltf.scene} onClick={handlePointClick} />
//       <ambientLight />
//     </>
//   );
// };

// const ColorPickerOverlay = ({ pickedColor, onColorChange }) => (
//   <div style={{ position: "absolute", top: 10, left: 10, zIndex: 999 }}>
//     <ChromePicker color={pickedColor} onChange={onColorChange} />
//   </div>
// );

// const App = () => {
//   const [pickedColor, setPickedColor] = useState("#ff0000");

//   const handleColorChange = useCallback(color => {
//     setPickedColor(color.hex);
//   }, []);

//   return (
//     <>
//       <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
//         <OrbitControls />
//         <Scene pickedColor={pickedColor} />
//       </Canvas>
//       <ColorPickerOverlay pickedColor={pickedColor} onColorChange={handleColorChange} />
//     </>
//   );
// };

// export default App;
