import React, { Component } from "react";
import {Route, Switch } from 'react-router-dom'
import Overview from './components/pages/Overview'
import Validators from './components/pages/Validators'
import WalletProvider from "./components/providers/WalletProvider";


import "./styles/app.scss";

// import drizzleOptions from "./drizzleOptions";
// import MyContainer from "./MyContainer";

class App extends Component {
  render() {
    return (
        <div>
          <WalletProvider>
            <Switch>
              <Route exact path='/' component={Overview} />
              <Route exact path='/validators' component={Validators} />
            </Switch>
          </WalletProvider>
        </div>
    );
  }
}

export default App;
