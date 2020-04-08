import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
