import React from "react";
import Login from "./container/Login";
import "./App.css";
import { Route, Switch } from "react-router";
import UserDetails from "./container/UserDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/UserDetails" component={UserDetails} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
