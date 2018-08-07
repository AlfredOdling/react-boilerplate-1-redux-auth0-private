import React, { Component, PropTypes } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions/user";

import './User.css';


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
        <div className="User-title">React + Redux + Thunk + DevTools + Auth0 + Prettier</div>

        <div className="default-font">
          {this.props.open_data} &nbsp; <button onClick={()=>this.props.open_request()}>Request open data</button>
        </div>

        <div className="default-font">
          {this.props.protected_data.email} &nbsp; <button onClick={()=>this.props.protected_request()}>Request secured data</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    open_request: url => dispatch(actions.open_request()),
    protected_request: url => dispatch(actions.protected_request()),
  };
};

function mapStateToProps(state) {
  return {
    open_data: state.user.open_data,
    protected_data: state.user.protected_data
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
