import React from "react";
import styled, { css } from "styled-components";
import { Image } from "cloudinary-react";
import { cloudName } from "../../settings";

const ItemTitle = styled.h3`
  color: rebeccapurple;
  margin: 0;
  padding: 0.8rem 0;
  border-top: 1px solid lightgray;
`;

const rowStyle = css`
  /* styles for row view */
  min-height: 60px;
  display: flex;

  ${ItemTitle} {
    border: none;
    font-size: 18px;
    margin-left: 10px;
    line-height: 2;
  }
`;

const cardStyle = css`
  /* styles for card view */
  margin-right: 10px;
  margin-bottom: 10px;
  width: 220px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ItemContainer = styled.div`
  border: 1px solid lightgray;
  padding: 5px;

  ${props => (props.isGrid ? cardStyle : rowStyle)}

  &:hover {
    background-color: #d3d3d363;
    cursor: pointer;
  }
`;

const StyledItem = props => {
  return (
    <ItemContainer isGrid={props.isGrid}>
      <Image
        cloudName={cloudName}
        publicId={props.publicId}
        width={props.isGrid ? "200" : ""}
        height={props.isGrid ? "" : "60"}
        crop="scale"
      />
      <ItemTitle>{props.title}</ItemTitle>
    </ItemContainer>
  );
};

export default StyledItem;
