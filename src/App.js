import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const state = useState("Test");
  console.log(state);
  return <div className="App"></div>;
}
