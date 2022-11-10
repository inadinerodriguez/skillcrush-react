import React from "react";
import ReactDOM from "react-dom";
//import the default export from the greeting module
//import the named exports from the helpers module
import greeting from "./greeting";
import { subHeader } from "./helpers";
import { organize } from "./helpers";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>{greeting}</h2>
      <h5>{subHeader}</h5>
      <img alt="stay organzied" src={organize} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
