import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const requireAuth = (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
      return <div></div>;
    }
  }

  function mapStateToProps({ auth }) {
    return {
      auth,
    };
  }

  return connect(mapStateToProps)(RequireAuth);
};

export default requireAuth;