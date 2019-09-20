import React from "react";

export default ({ cell, cellId, openCell, gameIsOver }) => {
  return (
    <div
      style={{
        fontSize: 8,
        border: `1px solid ${
          cell.opened ? (cell.mined ? "red" : "green") : "black"
        }`,
        width: "20px",
        height: "20px"
      }}
      onClick={() => {
        if (!gameIsOver) {
          openCell(cellId);
        }
      }}
    >
      {cell.opened ? (cell.mined ? "X" : cell.mines) : null}
    </div>
  );
};
