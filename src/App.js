import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Technologies from "./pages/Technologies";
import TerminalPage from "./pages/TerminalPage";

import "./App.css";

const App = () => {
  return (
    <Router basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
				<Route exact path="/technologies" component={Technologies} />
				<Route exact path="/terminal" component={TerminalPage} />
				<Route path="/" component={Home} />
      </Switch>
			<Footer />
    </Router>
  );
};

export default App;
