import React, { useState } from "react";
import "../style/main.css";

export default function Floor() {
  const [length, setLength] = useState();
  const [depth, setDepth] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const areaSize = (x, y) => {
    return x * y;
  };
  return (
    <div className="result">
      <form onSubmit={handleSubmit}>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) =>
              setLength(
                e.target.value > 0 ? e.target.value : e.target.value * -1
              )
            }
          />
        </label>
        <label>
          {" "}
          Width:
          <input
            type="number"
            value={depth}
            onChange={(e) =>
              setDepth(
                e.target.value > 0 ? e.target.value : e.target.value * -1
              )
            }
          />
        </label>
        <input type="submit" />
      </form>
      {length && depth ? (
        <p className="mainP">
          Your area size of {areaSize(length, depth)} square metres. 2 coats
          will be required, so you will need enough paint to cover{" "}
          {areaSize(length, depth) * 2} square metres in total approximately:{" "}
          {(areaSize(length, depth) * 2) / 10}-{" "}
          {(areaSize(length, depth) * 2) / 8} litres of paint required
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
