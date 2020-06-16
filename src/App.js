import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./styledComponents/Nav";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
