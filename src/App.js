import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Classes from "./Components/Classes/Classes";
import Home from "./Components/HomePage/Home";
import MembershipForm from "./Components/MembershipForm/MembershipForm";
import ClassShedule from "./Components/Schedule/ClassShedule";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/registry">
            <MembershipForm></MembershipForm>
          </Route>
          <Route path="/schedule">
            <ClassShedule></ClassShedule>
          </Route>
          <Route path="/class">
            <Classes></Classes>
          </Route>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
