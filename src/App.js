import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stepper from './Stepper/stepper';
import LandingPage from './Landing/Landing';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Stepper {...props} />} />
          <Route exact path='/landing' render={(props) => <LandingPage {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
