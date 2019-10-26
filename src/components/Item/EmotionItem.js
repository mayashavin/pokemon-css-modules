import React from "react";
import styled from "@emotion/styled";
import { Image } from "cloudinary-react";
import { cloudName } from "../../settings";
// import { darken } from 'polished';
// import yiq from "yiq";

/* color: ${props => yiq(props.theme.color)}; */
/* background-color: ${props => darken(0.05, props.themeColor)}; */

const ItemTitle = styled.h3`
  /* color: ${props => props.theme.color}; */
  margin: 0;
  padding: 0.8rem 0;
  border-top: 1px solid lightgray;

  .list-view & {
    border: none;
    font-size: 18px;
    margin-left: 10px;
    line-height: 2;
  }
`;

const StyledItem = styled.div`
  border: 1px solid lightgray;
  padding: 5px;
  background: ${props => props.theme.color};

  .grid-view & {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 220px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .list-view & {
    min-height: 60px;
    display: flex;

    img {
      height: 60px;
      width: auto;
    }
  }

  &:hover {
    background-color: #d3d3d363;
    cursor: pointer;
  }
`;

const Item = props => {
  return (
    <StyledItem>
      <Image
        cloudName={cloudName}
        publicId={props.publicId}
        width="200"
        crop="scale"
      />
      <ItemTitle>{props.title}</ItemTitle>
    </StyledItem>
  );
};

export default Item;
