import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import UserList from "./components/UserList";
import User from "./components/User";

class App extends Component {
  state = { users: [] };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>Ring Fellowship</h1>
        <Route path="/" render={() => <UserList users={this.state.users} />} />
        <Route
          path="/users/:id"
          render={props => <User {...props} users={this.state.users} />}
        />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default App;
