import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";

export default function AddUserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };
    setEnteredUsername("");
    setEnteredAge("");
    console.log("user input");
  };
  const enterUserNameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const enterAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          onChange={enterUserNameHandler}
          value={enteredUsername}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          onChange={enterAgeHandler}
          value={enteredAge}
          id="age"
          type="number"
          min="1"
          step="1"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
