import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Class from "./Components/Classes/Class/Class";
import Classes from "./Components/Classes/Classes";
import Home from "./Components/HomePage/Home";
import Pricing from "./Components/Pricing/Pricing";
import MemberShip from "./Components/Bank/MembershipForm/MembershipForm";
import BankPayment from "./Components/Bank/BankPayment/BankPayment";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/registry">
            <MemberShip></MemberShip>
          </Route>

          <Route path="/payment">
            <BankPayment></BankPayment>
          </Route>
          <Route path="/classes/:id" children={Class}></Route>
          <Route path="/classes" component={Classes}>
            <Classes></Classes>
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing></Pricing>
          </Route>
          <Route exact path="/home" component={Home}>
            <Home></Home>
          </Route>
          <Route exact path="/" component={Home}>
            <Home></Home>


          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
