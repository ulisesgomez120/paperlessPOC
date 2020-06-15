import React from "react";
import "./App.css";
import { Button, PrimaryBtn } from "./styledComponents/Button";
import Nav from "./styledComponents/Nav";

function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <h1>Choose Line:</h1>
      <Button disabled home></Button>
      <PrimaryBtn home></PrimaryBtn>
    </React.Fragment>
  );
}

export default App;
