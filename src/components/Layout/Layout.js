import React, { useState } from "react";
import Item from "../Item/Item";
import CheckBox from "../CheckBox/CheckBox";
import { database } from "../../data/pokemons.json";
import styles from "./Layout.module.scss";

const pokemons = database.pokemons;
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
      {/* <Avatar title="Maya" publicId="mayashavin/maya1" /> */}
      <div className={isGrid ? styles.gridLayout : styles.rowLayout}>
        {Object.keys(pokemons).map(id => (
          <Item {...pokemons[id]} isGrid={isGrid} key={pokemons[id].publicId} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
