import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  {
    getUsers {
      name
      age
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_USERS);

  console.log(data);

  if (loading || error) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
