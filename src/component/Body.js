import React, { useState } from "react";
import "../style/main.css";
import Ceiling from "./Ceiling";
import Floor from "./Floor";
import Room from "./Room";
import Walls from "./Walls";

export default function Body() {
  const [val, setVal] = useState();
  function handleChange(e) {
    console.log(e.target.value);
    setVal(e.target.value);
  }
  return (
    <div className="Main">
      <p className="mainP">
        Paint is sold in various container sizes. The most common sizes are- 1
        litre, 2.5 litres, 5 litres, 10 litres. Some paint manufactures package
        paints in 500 ml (half a litre), 3 litres, 7.5 litres, 15 litres.
      </p>
      <p className="mainP">
        The amount of paint you will need will depend on the porosity of the
        substrate, and how many coats you require to achieve full opacity. One
        coat of paint is rarely sufficient to achieve a good finish, unless it
        is the same colour. REMEMBER- if painting new plasterwork, a watered
        down coat of paint will be required as a primer. Water the paint down by
        mixing 60% paint to 40% water. This coat will soak into the new plaster,
        and form a key to subsequent full coats. If you apply undiluted paint to
        new plaster, it will not soak into the plaster, and is likely to peel
        off.
      </p>
      <form onChange={handleChange}>
        <input type="radio" value="floor" checked={val === "floor"} />
        floor
        <input type="radio" value="walls" checked={val === "walls"} />
        walls
        <input type="radio" value="ceiling" checked={val === "ceiling"} />
        ceiling
        <input type="radio" value="whole" checked={val === "whole"} />
        whole room
      </form>
      {val === "floor" ? (
        <Floor />
      ) : val === "walls" ? (
        <Walls />
      ) : val === "ceiling" ? (
        <Ceiling />
      ) : (
        <Room />
      )}
    </div>
  );
}
