import React from "react";
import { useState } from "react/cjs/react.development";

export default function Walls() {
  const [length, setLength] = useState();
  const [depth, setDepth] = useState();
  const [num, setNum] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(length, depth);
  };
  const areaSize = (x, y, n) => {
    return x * y * n;
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
          Hight:
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
        <label>
          {" "}
          How many walls:
          <input
            type="number"
            value={num}
            onChange={(e) =>
              setNum(e.target.value > 0 ? e.target.value : e.target.value * -1)
            }
          />
        </label>
        <input type="submit" />
      </form>
      {length && depth ? (
        <p className="mainP">
          Your area size of {areaSize(length, depth, num)} square metres. 2
          coats will be required, so you will need enough paint to cover{" "}
          {areaSize(length, depth, num) * 2} square metres in total
          approximately: {(areaSize(length, depth, num) * 2) / 10}-{" "}
          {(areaSize(length, depth, num) * 2) / 8} litres of paint required
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
