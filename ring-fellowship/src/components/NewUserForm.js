import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser } from "../redux-components/actions";

class NewUserForm extends Component {
  state = { name: "", bio: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const nUser = {
      name: this.state.name,
      bio: this.state.bio
    };
    this.props.addUser(nUser);
    this.setState({ name: "", bio: "" });
    this.props.history.push(`/`);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="">
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
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return state;
};
export default connect(
  mapState,
  { addUser }
)(NewUserForm);
