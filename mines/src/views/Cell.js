import React from "react";

export default ({ cell, cellId }) => {
  return (
    <div
      style={{
        fontSize: 8,
        border: `1px solid black`,
        width: "20px",
        height: "20px"
      }}
    >
      {cell.mined ? "X" : null}
    </div>
  );
};
