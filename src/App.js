import React from "react";
import "./styles.css";
import Greet from "./compents/Greet";
import Welcome from "./compents/welcome";
import Hello from "./compents/hello";

export default function App() {
  return (
    <div className="App">
      <Greet name="Manmathan">
        <p1>This is mathan</p1>
        <br></br>
        <p2> Waste man</p2>
      </Greet>
      <Welcome name="love" />
      <Hello />
    </div>
  );
}
