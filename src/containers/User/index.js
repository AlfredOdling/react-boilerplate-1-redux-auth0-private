import React, { Component, PropTypes } from "react";

import { connect } from "react-redux";
//test
import * as actions from "../../actions/user";
class User extends Component {
  constructor(props) {
    super(props);

    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated()) {
      props.history.push("/login");
    }
  }

  componentDidMount() {
    console.log(this.props);
    console.log(actions);
  }

  render() {
    return (
      <div>
        <h1>user page</h1>
        <h2>{this.props.value}</h2>
        <button onClick={() => this.props.increment()}>increment</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: url => dispatch(actions.increment())
  };
};

function mapStateToProps(state) {
  return {
    value: state.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
