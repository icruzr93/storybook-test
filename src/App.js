import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>My App</Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button>Hello, Storybook!</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
