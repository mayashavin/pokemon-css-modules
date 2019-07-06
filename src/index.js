import React from "react";
import ReactDOM from "react-dom";
// import Avatar from "./components/Avatar/Avatar";
import Layout from "./components/Layout/Layout";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>The Pokemons</h1>
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
