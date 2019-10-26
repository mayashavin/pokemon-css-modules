import React from "react";
import styled from "@emotion/styled";

const StyledBox = styled.div(props => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  background: "grey",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px"
}));

const Box = props => <StyledBox {...props} />;

export default Box;
