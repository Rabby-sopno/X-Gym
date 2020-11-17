import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Home from "./components/HomePage/Home";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/service"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
