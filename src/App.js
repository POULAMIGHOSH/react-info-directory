import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [Users, setUsers] = useState([]);
  const AdduserHandler = (name, age) => {
    setUsers((users) => {
      return [...users, { name: name, age: age, id: Math.random().toString() }];
    });
  };

  return (
    <Bod>
      <AddUser onAddUser={AdduserHandler} />
      <UserList users={Users} />
    </Bod>
  );
}
const Bod = styled.div`
  background: black;
`;
export default App;
