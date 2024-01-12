// ColorContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ColorContextProps {
  pickedColor: string;
  handleColorChange: (color: string) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pickedColor, setPickedColor] = useState("#ff0000");

  const handleColorChange = (color: string) => {
    setPickedColor(color);
  };

  return <ColorContext.Provider value={{ pickedColor, handleColorChange }}>{children}</ColorContext.Provider>;
};

export const useColorContext = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColorContext must be used within a ColorProvider");
  }
  return context;
};
