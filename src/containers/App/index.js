import React, { Component } from 'react';
import './App.css';

import Auth from '../../Auth';


import Login from '../Login/'
import User from '../User/'
import { Switch, Route } from 'react-router-dom';


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
          <Route exact path="/" render={(props) => <Login auth={auth} {...props} />} />
          <Route path="/user" render={(props) => <User auth={auth} {...props} />} />
          <Route path="" render={(props) => <Login auth={auth} {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
