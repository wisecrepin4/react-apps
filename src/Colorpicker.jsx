import React, { useState } from "react";
export default function Colorpicker() {
  const [color, setColor] = useState("#fffff");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker">
      <p>please pick a color</p>
      <div className="color-holder" style={{ backgroundColor: color }}>
        selected color:{color}
      </div>

      <input type="color" onChange={handleColorChange} value={color} />
    </div>
  );
}
