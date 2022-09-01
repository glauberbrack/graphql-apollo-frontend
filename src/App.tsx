import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { gql, useMutation } from "@apollo/client";

const GRAPHQL_MUTATIONS = gql`
  {
    createUser(name: "John Doe Grandfather", age: 40) {
      name
      age
    }
  }
`;

function App() {
  const [createUser, { data, loading, error }] = useMutation(GRAPHQL_MUTATIONS);

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
