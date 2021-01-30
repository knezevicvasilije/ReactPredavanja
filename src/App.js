import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const state = useState("Hello World");
  console.log(state);
  return (
    <div className="App">
      {state[0]}
      <button onClick={() => state[1]("hello")}>Change Test</button>
    </div>
  );
}
