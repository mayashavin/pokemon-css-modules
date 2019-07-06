import React from "react";
import { Image } from "cloudinary-react";
import { cloudName } from "../../settings";

const avatarStyle = {
  display: "flex",
  position: "relative",
  alignItems: "center",
  width: "150px",
  height: "150px"
};

const titleStyle = {
  position: "absolute",
  display: "flex",
  fontSize: "40px",
  width: "inherit",
  alignItems: "center",
  justifyContent: "center"
};

const Avatar = props => {
  return (
    <div style={avatarStyle}>
      <Image
        cloudName={cloudName}
        publicId={props.publicId}
        alt={props.title}
        width={150}
        height={150}
        crop="thumb"
        radius="max"
        opacity={50}
      />
      <div style={titleStyle}>{props.title[0].toUpperCase()}</div>
    </div>
  );
};

export default Avatar;
