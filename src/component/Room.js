import React, { useState } from "react";

export default function Room() {
  const [length, setLength] = useState();
  const [depth, setDepth] = useState();
  const [hight, setHight] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(length, depth);
  };
  const areaSize = (x, y, z) => {
    let total = x * y * 2 + x * z * 2 + y * z * 2;
    return total;
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
        <label>
          {" "}
          Hight:
          <input
            type="number"
            value={hight}
            onChange={(e) =>
              setHight(
                e.target.value > 0 ? e.target.value : e.target.value * -1
              )
            }
          />
        </label>
        <input type="submit" />
      </form>
      {length && depth && hight ? (
        <p className="mainP">
          Your area size of {areaSize(length, depth, hight)} cubic metres. 2
          coats will be required, so you will need enough paint to cover{" "}
          {areaSize(length, depth, hight) * 2} cubic metres in total
          approximately: {(areaSize(length, depth, hight) * 2) / 10}-{" "}
          {(areaSize(length, depth, hight) * 2) / 8} litres of paint required
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
