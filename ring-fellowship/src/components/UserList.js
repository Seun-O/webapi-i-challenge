import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import UserItem from "./UserItem.js";
import { getUsers } from "../redux-components/actions/index";

class UserList extends Component {
  render() {
    return (
      <div>
        <h1>List of Users</h1>
        {this.props.users.map(user => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <UserItem name={user.name} bio={user.bio} />
          </Link>
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.getUsers();
  }
}

const mapState = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapState,
  { getUsers }
)(UserList);
