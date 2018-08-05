import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'

class User extends Component {

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
