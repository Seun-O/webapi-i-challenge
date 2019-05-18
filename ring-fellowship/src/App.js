import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserList from "./components/UserList";
import User from "./components/User";
import NewUserForm from "./components/NewUserForm";
import Menu from "./components/Layout/Menu";

const App = () => {
  return (
    <Router>
      <Menu />
      <Route exact path="/" render={() => <UserList />} />
      <Route path="/users/:id" render={props => <User {...props} />} />
      <Route path="/new-user" render={props => <NewUserForm {...props} />} />
    </Router>
  );
};

export default App;
