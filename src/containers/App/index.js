import React, { Component } from 'react';
import './App.css';

import Auth from '../../Auth';


import Login from '../Login/'
import User from '../User/'
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'


const auth = new Auth();


class App extends Component {


  componentDidMount(){
    // this.lock.show();
  }

  render() {


    return (
      <div>
        <div>main app</div>
        <hr />
        <Switch>
          <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} />
          <Route path="/user" render={(props) => <User auth={auth} {...props} />} />
          <Route path="" render={(props) => (
            auth.isAuthenticated() ? (
              <Redirect to="/user"/>
            ) : (
              <User auth={auth} {...props} />
            )
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
