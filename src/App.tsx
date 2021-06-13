import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateMovie from "./Screens/CreateMovie";
import Tickets from "./Screens/Tickets";
import CreateTickets from "./Screens/CreateTickets";

enum ComponentType {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/create"
          component={() => <CreateMovie componentType={ComponentType.CREATE} />}
        />
        <Route
          exact
          path="/edit"
          render={() => {
            return <CreateMovie componentType={ComponentType.EDIT} />;
          }}
        />
        <Route exact path="/tickets/all" component={Tickets} />
        <Route exact path="/ticket/create" component={CreateTickets} />
      </Switch>
    </Router>
  );
}

export default App;
