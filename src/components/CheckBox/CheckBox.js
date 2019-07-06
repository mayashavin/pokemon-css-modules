import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  return (
    <div className={styles.checkBox}>
      <input
        className={styles.checkBoxInput}
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <label for={props.name} className={styles.checkBoxLabel}>
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
