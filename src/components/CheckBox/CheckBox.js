import React from "react";
import styled from "@emotion/styled";

const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const StyledCheckBoxLabel = styled.label`
  margin-left: 5px;
`;

const CheckBox = props => {
  return (
    <StyledCheckBox>
      <input
        name={props.name}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <StyledCheckBoxLabel htmlFor={props.name}>
        {props.label}
      </StyledCheckBoxLabel>
    </StyledCheckBox>
  );
};

export default CheckBox;
