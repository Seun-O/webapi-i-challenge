import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <h1>Fellowship of the Ring</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-user">New User</Link>
        </li>
      </ul>
    </nav>
  );
};
