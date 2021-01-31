import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [random, setRandom] = useState(() => {
    return Math.random();
  });
  useEffect(() => {
    console.log("Izvrsen useEffect fja");
  });

  console.log("rerendered");
  return (
    <div className="App">
      {counter} <br></br>
      <br></br>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Count + 1
      </button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        {" "}
        Count - 1{" "}
      </button>
      <p>Random value: {random}</p>
    </div>
  );
}
