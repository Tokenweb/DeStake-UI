import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Overview from './components/pages/Overview';
import Validators from './components/pages/Validators';
import Portfolio from './components/pages/Portfolio';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Overview} />
        <Route exact path='/validators' component={Validators} />
        <Route exact path='/portfolio/:address' component={Portfolio} />
      </Switch>
    );
  }
}

export default App;
