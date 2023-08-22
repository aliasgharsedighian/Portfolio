import React from "react";

function Swatch({ color }) {
  console.log(`swatch Rendered ${color}`);
  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: color }}
    ></div>
  );
}

export default React.memo(Swatch);
