import React, { useState, memo } from "react";
import StyledItem from "../Item/EmotionItem";
import CheckBox from "../CheckBox/CheckBox";
import { database } from "../../data/pokemons.json";
import styled from "@emotion/styled";

const pokemons = database.pokemons;

const pokedex = Object.keys(pokemons);

const Items = memo(({ isGrid }) => (
  <React.Fragment>
    {pokedex.map(id => (
      <StyledItem
        // {...pokemons[id]}
        publicId={pokemons[id].publicId}
        title={pokemons[id].title}
        isGrid={isGrid}
        key={pokemons[id].publicId}
      />
    ))}
  </React.Fragment>
));

const StyledLayout = styled.div`
  &.grid-view {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Layout = () => {
  const [isGrid, changeMode] = useState(true);

  return (
    <div>
      <CheckBox
        name="viewMode"
        label="Change to Grid"
        checked={isGrid}
        onChange={e => changeMode(e.target.checked)}
      />
      <StyledLayout className={isGrid ? "grid-view" : "list-view"}>
        <Items isGrid={isGrid} />
      </StyledLayout>
    </div>
  );
};

export default Layout;
