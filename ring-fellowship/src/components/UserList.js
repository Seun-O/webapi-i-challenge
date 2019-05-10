import React from "react";
import { Link } from "react-router-dom";

import UserItem from "./UserItem.js";

export default props => {
  return (
    <div>
      <h1>List of Users</h1>
      {props.users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <UserItem name={user.name} bio={user.bio} />
        </Link>
      ))}
    </div>
  );
};
