import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends Component {


  componentDidMount(){
    console.log(this.props)
    this.props.auth.login()

  }

  render() {

    return (
      <div>

      </div>


    )
  }
}





export default Login
