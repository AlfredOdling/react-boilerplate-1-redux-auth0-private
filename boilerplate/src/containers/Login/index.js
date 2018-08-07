import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../../history';


class Login extends Component {


  componentDidMount(){

    let is_logged = localStorage.getItem('access_token');
    if (!is_logged){
      this.props.auth.login()
    } else {
      history.replace('/user');
    }

  }

  render() {

    return (
      <div>
      </div>
    )
  }
}





export default Login
