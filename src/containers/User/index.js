import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

class User extends Component {

  constructor(props) {
    super(props)

    console.log(props)
    const { isAuthenticated } = this.props.auth;
    // console.log(isAuthenticated())
    if (!isAuthenticated()){
      props.history.push('/login')
    }
  }

  componentDidMount(){
    console.log(this.props)
  }

  render() {

    return (

        <h1>user page</h1>

    )
  }
}

function mapStateToProps (state) {
  return {
    value: state.user
  }
}

export default connect(mapStateToProps)(User)
