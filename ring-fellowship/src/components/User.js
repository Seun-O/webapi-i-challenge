import React from "react";

import UserItem from "./UserItem";

export default function User(props) {
  //   const user = props.users.find(user => user.id === props.match.params.id);
  console.log(props.user);
  return <div>{/* <UserItem name={user.name} bio={user.bio} /> */}</div>;
}
