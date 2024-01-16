// import "./index.css";
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "./Model";
import ColorPicker from "./ColorPicker";
import { ColorProvider } from "./store/ColorContext";
import { ModelProvider } from "./store/ModelContext";
import ModelPicker from "./ModelPicker";

const App = () => {
  // const [mesh, setMesh] = useState("#ffffff");
  // const [stripes, setStripes] = useState("#ffffff");
  // const [soul, setSoul] = useState("#ffffff");

  return (
    <ColorProvider>
      <ModelProvider>
        <div className='App'>
          <div className='wrapper'>
            <div className='card'>
              <div className='product-canvas'>
                <Canvas>
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    {/* <Model customColors={{ mesh: mesh, stripes: stripes, soul: soul }} /> */}
                    <Model />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  </Suspense>
                </Canvas>
              </div>
              <ColorPicker />
              <ModelPicker />
              {/* <h2>Color chooser</h2>
          <div className='colors'>
            <div>
              <input type='color' id='mesh' name='mesh' value={mesh} onChange={e => setMesh(e.target.value)} />
              <label htmlFor='mesh'>Main</label>
            </div>

            <div>
              <input type='color' id='stripes' name='stripes' value={stripes} onChange={e => setStripes(e.target.value)} />
              <label htmlFor='stripes'>Stripes</label>
            </div>
            <div>
              <input type='color' id='soul' name='soul' value={soul} onChange={e => setSoul(e.target.value)} />
              <label htmlFor='soul'>Soul</label>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </ModelProvider>
    </ColorProvider>
  );
};

export default App;

// import React, { useState, useMemo, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial";

// // const ModelComponent = ({ model, color }) => {
// //   const gltf = useLoader(GLTFLoader, model);

// //   // Recreate material on color change
// //   const material = useMemo(() => new MeshBasicMaterial({ color }), [color]);

// //   return (
// //     <group>
// //       {Array.isArray(gltf) ? (
// //         gltf.map((g, index) => (
// //           <mesh key={index} material={material} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
// //             {g.scene && <primitive object={g.scene} />}
// //           </mesh>
// //         ))
// //       ) : (
// //         <mesh material={material} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
// //           {gltf.scene && <primitive object={gltf.scene} />}
// //         </mesh>
// //       )}
// //     </group>
// //   );
// // };

// const ModelComponent = ({ model, color, onMaterialClick }) => {
//   const gltf = useLoader(GLTFLoader, model);
//   const group = useRef();

//   // Recreate material on color change
//   const material = useMemo(() => new MeshBasicMaterial({ color }), [color]);

//   // Helper function to change material color on click
//   const handleMaterialClick = materialIndex => {
//     if (onMaterialClick) {
//       onMaterialClick(materialIndex, color);
//     }
//   };

//   // Traverse through the model to enable raycasting
//   useFrame(() => {
//     group.current && group.current.traverse(node => {
//       if (node.isMesh) {
//         node.material = material; // Set the same material for all meshes in the model
//         node.onClick = () => handleMaterialClick(node.materialIndex);
//       }
//     });
//   });

//   return <group ref={group} />;
// };

// const App = () => {
//   const [selectedModel, setSelectedModel] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("#ff0000"); // Initial color

//   const handleModelSelection = model => {
//     setSelectedModel(model);
//   };

//   const handleColorChange = color => {
//     setSelectedColor(color);
//   };

//   const handleMaterialClick = (materialIndex, newColor) => {
//     // Logic to update color of the selected material
//     // Update your state or perform any other necessary actions
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <OrbitControls />
//         {selectedModel && <ModelComponent model={selectedModel} color={selectedColor} onMaterialClick={handleMaterialClick} />}{" "}
//       </Canvas>
//       <div>
//         <h2>Select a Model</h2>
//         <button onClick={() => handleModelSelection("/jersey.gltf?url")}>Model 1</button>
//         <button onClick={() => handleModelSelection("/jersey-1.gltf?url")}>Model 2</button>
//       </div>
//       <div>
//         <h2>Recolor Model</h2>
//         <input type='color' value={selectedColor} onChange={e => handleColorChange(e.target.value)} />
//       </div>
//     </div>
//   );
// };

// export default App;
