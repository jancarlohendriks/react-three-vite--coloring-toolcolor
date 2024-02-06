import React from "react";
import { useModelContext } from "../store/ModelContext";

const ModelPicker: React.FC = () => {
  const { models, currentModel, setModel } = useModelContext();

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(event.target.value);
  };

  return (
    <div>
      <label htmlFor='modelSelect'>Select Model:</label>
      <select id='modelSelect' value={currentModel} onChange={handleModelChange}>
        {models.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelPicker;
