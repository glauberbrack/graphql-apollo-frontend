import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import request from "./api/request";
import { gql } from "@apollo/client";

function App() {
  const createUser = async () => {
    await request.mutate({
      mutation: gql`
        mutation {
          createUser(name: "John Doe", age: 28) {
            name
            age
          }
        }
      `,
    });
  };

  useEffect(() => {
    createUser();
  }, []);

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
