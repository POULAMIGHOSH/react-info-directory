import React, { useState } from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser = (props) => {
  const [EnteredUserName, setEnteredUserName] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [Error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (EnteredAge.trim().length === 0 || EnteredUserName.trim().length === 0) {
      setError({ title: "invalid input", msg: "enter valid input" });
      return;
    }
    if (+EnteredAge < 0) {
      setError({ title: "invalid age", msg: "enter valid age" });
      return;
    }
    props.onAddUser(EnteredUserName, EnteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const UsernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const UserAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const ErrorHandler = () => {
    setError(null);
  };
  console.log(Error, "----");
  return (
    <>
      {Error && (
        <ErrorModel
          title={Error.title}
          msg={Error.msg}
          handleError={ErrorHandler}
        />
      )}
      <Card>
        <Userform onSubmit={AddUserHandler}>
          <Userlabel htmlFor="username">UserName</Userlabel>
          <Userinput
            id="username"
            type={"text"}
            value={EnteredUserName}
            onChange={UsernameChangeHandler}
          />
          <Userlabel htmlFor="age">Age</Userlabel>
          <Userinput
            id="age"
            type={"number"}
            value={EnteredAge}
            onChange={UserAgeChangeHandler}
          />
          <Button type={"submit"}>Add User</Button>
        </Userform>
      </Card>
    </>
  );
};

const Userform = styled.form`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;
const Userlabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const Userinput = styled.input`
  ont: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  & :focus {
  outline: none;
  border-color: #4f005f;
`;

export default AddUser;
