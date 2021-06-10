import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateMovie from "./Screens/CreateMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateMovie} />
      </Switch>
    </Router>
  );
}

export default App;
