// ColorPickerOverlay.tsx

import React from "react";
import { ChromePicker } from "react-color";
import { useColorContext } from "./ColorContext";

const ColorPickerOverlay: React.FC = () => {
  const { pickedColor, handleColorChange } = useColorContext()!;

  return (
    <div style={{ position: "absolute", top: 10, left: 10, zIndex: 999 }}>
      <ChromePicker color={pickedColor} onChange={color => handleColorChange(color.hex)} />
    </div>
  );
};

export default ColorPickerOverlay;
