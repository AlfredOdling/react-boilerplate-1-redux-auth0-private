import React, { Component } from 'react';
import './App.css';

import Auth0Lock from 'auth0-lock';

import Login from '../Login/'
import User from '../User/'
import { Switch, Route } from 'react-router-dom';


class App extends Component {


  // lock = new Auth0Lock('4A1Rt3SiOnzFXkz4f6hWbexbFQ12MKzX', 'polymath.auth0.com', {
  //   autoclose: true,
  //   auth: {
  //     redirectUrl: '',
  //     responseType: 'token',
  //     params: {
  //       scope: 'openid email user_metadata'
  //     }
  //   }
  // });

  componentDidMount(){
    // this.lock.show();
  }

  render() {


    return (
      <div>
        <div>main app</div>
        <hr />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/user" component={User} />
          <Route path="" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
