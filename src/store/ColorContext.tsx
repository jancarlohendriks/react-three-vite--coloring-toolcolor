// ColorContext.tsx

import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
// import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ColorContextProps {
  pickedColor: string;
  handleColorChange: (color: string) => void;
  currentModel: string;
  setModel: (model: string) => void;
}

interface ModelCache {
  [key: string]: GLTF;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pickedColor, setPickedColor] = useState("#ff0000");
  const [currentModel, setCurrentModel] = useState<string>("/jersey.gltf?url");
  const [modelCache, setModelCache] = useState<ModelCache>({});

  const handleColorChange = (color: string) => {
    setPickedColor(color);
  };

  const setModel = (model: string) => {
    setCurrentModel(model);
  };

  // Memoize the GLTF loader to avoid re-creating it on every render
  const gltfLoader = useMemo(() => new GLTFLoader(), []);

  // Load a model and store it in the cache
  const loadModel = async (modelPath: string): Promise<GLTF> => {
    if (modelCache[modelPath]) {
      // Return the cached model if it exists
      return modelCache[modelPath];
    }

    // Load the model if it's not in the cache
    const loadedModel = await gltfLoader.loadAsync(modelPath);

    // Update the cache
    setModelCache(prevCache => ({
      ...prevCache,
      [modelPath]: loadedModel,
    }));

    return loadedModel;
  };

  return <ColorContext.Provider value={{ pickedColor, handleColorChange, currentModel, setModel }}>{children}</ColorContext.Provider>;
};

export const useColorContext = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
