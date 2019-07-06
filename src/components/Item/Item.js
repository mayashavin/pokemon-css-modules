import React from "react";
import { Image } from "cloudinary-react";
import { cloudName } from "../../settings";
import styles from "./Item.module.scss";

const Item = props => {
  return (
    <div className={props.isGrid ? styles.itemCard : styles.itemRow}>
      <Image
        cloudName={cloudName}
        publicId={props.publicId}
        width={props.isGrid ? "200" : ""}
        height={props.isGrid ? "" : "60"}
        crop="scale"
      />
      <h3 className={styles.itemTitle}>{props.title}</h3>
    </div>
  );
};

export default Item;
