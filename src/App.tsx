import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateMovie from "./Screens/CreateMovie";
import Tickets from "./Screens/Tickets";
import CreateTickets from "./Screens/CreateTickets";
import Customers from "./Screens/Customers";
import CreateCustomer from "./Screens/CreateCustomer";
import CreatePayment from "./Screens/CreatePayment";
import Payments from "./Screens/Payments";

enum ComponentType {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/movie/create"
            component={() => (
              <CreateMovie componentType={ComponentType.CREATE} />
            )}
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
          <Route exact path="/customers/all" component={Customers} />
          <Route exact path="/customer/create" component={CreateCustomer} />
          <Route exact path="/payments/all" component={Payments} />
          <Route exact path="/payment/create" component={CreatePayment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
