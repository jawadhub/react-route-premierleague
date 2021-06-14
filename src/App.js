import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NoMatch from "./Components/Nomatch/NoMatch";
import TeamDetail from "./Components/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-total">
          <nav>
            <ul className="nav-bar">
              <li className="nav-link">
                <Link className="nav-text" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-text" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-text" to="/users">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <br />
          <br />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team/:idTeam">
              <TeamDetail />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
