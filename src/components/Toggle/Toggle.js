import React from "react";
import styles from "./Toggle.module.scss";

const Toggle = props => {
  return (
    <div className={styles.toggleContainer}>
      <div>{props.leftSide}</div>
      <div className={`switch ${props.status}`} onClick={props.toggle} />
      <div>{props.rightSide}</div>
    </div>
  );
};

export default Toggle;
