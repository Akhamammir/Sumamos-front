import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Stepper from './Stepper/stepper';
import LandingPage from './Landing/Landing';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/registro' render={(props) => <Stepper {...props} />} />
          <Route exact path='/' render={(props) => <LandingPage {...props} />} />
          {/* <Route exact path="/" render={() => (<Redirect to="/landing" />)} />           */}

        </Switch>
      </Router>
    );
  }
}

export default App;
