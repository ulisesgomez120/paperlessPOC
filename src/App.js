import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Scrap from "./components/Scrap";
import QualityCheck from "./components/QualityCheck";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scrap/:slug" component={Scrap} />
          <Route exact path="/quality-check/:slug" component={QualityCheck} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
