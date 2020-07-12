import React, { Component } from 'react';
import '../index.css';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import Header from './Header'
import Display from './Display'

class App extends Component {

  render() { 
    return (
      // wrap all components in router, Header contains search and nav buttons
      // switch will route to one of Route paths inside
      <BrowserRouter>
        <div className="container">
          <Header />

          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/space" /> } />
            <Route path="/:searchVal" render={ () => <Display /> } />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App