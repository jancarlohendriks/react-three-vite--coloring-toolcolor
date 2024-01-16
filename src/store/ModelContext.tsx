// ColorContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModelContextProps {
  models: string[];
  currentModel: string;
  setModel: (model: string) => void;
}

const ModelContext = createContext<ModelContextProps | undefined>(undefined);

export const ModelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const models: string[] = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [currentModel, setCurrentModel] = useState<string>("Option 1");

  const setModel = (model: string) => {
    setCurrentModel(model);
  };

  return <ModelContext.Provider value={{ models, currentModel, setModel }}>{children}</ModelContext.Provider>;
};

export const useModelContext = (): ModelContextProps => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModelContext must be used within a ModelProvider");
  }
  return context;
};
