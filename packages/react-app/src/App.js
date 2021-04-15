import React, { Component } from "react";
import {Route, Switch } from 'react-router-dom'
import Overview from './components/pages/Overview'
import Validators from './components/pages/Validators'


import "./styles/app.scss";

// import drizzleOptions from "./drizzleOptions";
// import MyContainer from "./MyContainer";

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
              <Route exact path='/' component={Overview} />
              <Route exact path='/validators' component={Validators} />
            </Switch>
        </div>
    );
  }
}

export default App;
