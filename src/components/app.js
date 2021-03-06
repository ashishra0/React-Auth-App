import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from './auth/Registration';
import Album from './go/Album';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/registration"} component={Registration} />
          <Route exact path={"/albums"} component={Album}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
