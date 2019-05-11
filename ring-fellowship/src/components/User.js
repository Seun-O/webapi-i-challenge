import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import {
  deleteUser,
  updateUser,
  toggleEdit
} from "../redux-components/actions/index";

class User extends Component {
  state = { id: null, name: "", bio: "" };
  deleteUser = e => {
    e.preventDefault();
    this.props.deleteUser(this.state.id);
    this.props.history.push("/");
  };
  updateUser = e => {
    e.preventDefault();
    e.stopPropagation();
    const newUser = {
      name: this.state.name,
      bio: this.state.bio
    };
    this.props.updateUser(this.state.id, newUser);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.props.editing) {
      return (
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="bio"
            placeholder="Bio"
            value={this.state.bio}
          />
          <button onClick={() => this.props.toggleEdit()}>Cancel</button>
          <button onClick={this.updateUser}>Save Changes</button>
        </div>
      );
    } else {
      return (
        <div>
          <UserItem name={this.state.name} bio={this.state.bio} />
          <button onClick={this.deleteUser}>Delete</button>
          <button onClick={() => this.props.toggleEdit()}>Edit</button>
        </div>
      );
    }
  }
  componentDidMount() {
    const user = this.props.users.find(
      user => `${user.id}` === this.props.match.params.id
    );
    this.setState({ id: user.id, name: user.name, bio: user.bio });
  }
}

const mapState = state => {
  return {
    users: state.users,
    editing: state.editing
  };
};

export default connect(
  mapState,
  { deleteUser, updateUser, toggleEdit }
)(User);
