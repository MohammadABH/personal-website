import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import History from "./pages/History";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
				<Route exact path="/tech-stack" component={TechStack} />
				<Route exact path="/history" component={History} />
				<Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
