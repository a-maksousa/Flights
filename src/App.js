import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LandingPage } from "./Pages/LandingPage"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/landingpage" />
            )} />
            <Route exact path='/landingpage' component={LandingPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
