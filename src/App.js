import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  // const [ Users, setUsers ] = useState( [] );

  return (
    <>
      <AddUser
      // setUsers={ setUsers }
      />
      <UserList users={[]} />
    </>
  );
}

export default App;
