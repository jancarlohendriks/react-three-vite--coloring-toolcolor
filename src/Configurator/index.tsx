import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { ColorProvider } from "../store/ColorContext";
import { ModelProvider } from "../store/ModelContext";

import { Model } from "./Model";
import ColorPicker from "./ColorPicker";
import ModelPicker from "./ModelPicker";

const Configurator = () => {
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
                    <Model />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  </Suspense>
                </Canvas>
              </div>
              <ColorPicker />
              <ModelPicker />
            </div>
          </div>
        </div>
      </ModelProvider>
    </ColorProvider>
  );
};

export default Configurator;
