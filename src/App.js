import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const updateCounter = () => {
    let a = counter + 1;
    setCounter(a);
  };
  console.log("rerendered");
  return (
    <div className="App">
      {counter}
      <button onClick={() => updateCounter()}>Count +1</button>
    </div>
  );
}
