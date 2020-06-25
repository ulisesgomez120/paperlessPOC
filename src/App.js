import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./styledComponents/Nav";
import Home from "./components/Home";
import Scrap from "./components/Scrap";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scrap/:slug" component={Scrap} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
