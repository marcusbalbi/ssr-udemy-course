import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Lista de Usuários Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admins: state.admins,
  };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(UsersList),
  loadData,
};
