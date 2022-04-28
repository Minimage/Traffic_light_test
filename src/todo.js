import React, { useState } from "react";

const TODO = () => {
  const [color, setColor] = useState("red");

  const shoot = () => {
    setColor("blue");
  };

  return (
    <div>
      <button>Hello</button>
      <p id="red" onClick={shoot} style={{ backgroundColor: color }}></p>
      <p id="yellow" onClick={shoot} style={{ backgroundColor: color }}></p>
      <p id="yellow" onClick={shoot} style={{ backgroundColor: color }}></p>
    </div>
  );
};

export default TODO;
