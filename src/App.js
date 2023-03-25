import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [Users, setUsers] = useState([]);
  const AdduserHandler = (name, age) => {
    setUsers((users) => {
      return [...users, { name: name, age: age }];
    });
  };

  return (
    <>
      <AddUser onAddUser={AdduserHandler} />
      <UserList users={Users} />
    </>
  );
}

export default App;
