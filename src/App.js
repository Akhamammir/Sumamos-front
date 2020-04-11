import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Stepper from './Stepper/stepper'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" render = {(props) => <Stepper {...props}/> }>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
