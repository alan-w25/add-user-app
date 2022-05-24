import React from "react";
import classes from "./AddUserForm.module.css";
import Card from "./UI/Card";

export default function AddUserForm(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" min="0" step="1" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}
