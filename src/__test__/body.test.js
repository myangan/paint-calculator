import React from "react";
import ReactDOM from "react-dom";
import Body from "../component/Body";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Body></Body>, div);
});
