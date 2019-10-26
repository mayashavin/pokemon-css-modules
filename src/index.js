import React, { useState } from "react";
import ReactDOM from "react-dom";
import StyledLayout from "./components/Layout/StyledLayout";
import styled from "@emotion/styled";
// import { ThemeProvider } from "emotion-theming";

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const colors = {
  default: "#fff",
  lightorange: "#fc9e2d",
  purple: "rgb(76, 76, 111)",
  darkpurple: "#111",
  pink: "pink"
};

function App() {
  const [theme, changeTheme] = useState({
    color: colors.default
  });

  return (
    <StyledApp>
      <h1>The Pokemons</h1>
      <select
        defaultValue={theme.color}
        onChange={e => changeTheme({ color: e.target.value })}
      >
        {Object.keys(colors).map(key => (
          <option value={colors[key]} key={key}>
            {key}
          </option>
        ))}
      </select>
      {/* <ThemeProvider theme={theme}> */}
      <StyledLayout />
      {/* </ThemeProvider> */}
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
