import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      {displayedValue}
      <SelectIcon>
        <Icon id="chevron-down" size="22px" strokeWidth={2} />
      </SelectIcon>
      <SelectInput value={value} onChange={onChange}>
        {children}
      </SelectInput>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  position: relative;
  border: none;

  width: fit-content;
  border-radius: 8px;

  padding: 12px 16px;
  /* Increased padding for chevron icon */
  padding-inline-end: calc(18px + 22px + 10px);
  font-size: 1rem;

  white-space: nowrap;

  &:focus-within {
    /* Highlight wrapper when select is focused */
    outline: 2px dotted #212121;
    outline: 2px auto Highlight;
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;

  /* Select input display view is replaced by the wrapper styles */
  opacity: 0;

  &::-ms-expand {
    display: none;
  }
`;

const SelectIcon = styled.div`
  /* Vertically center icon */
  position: absolute;
  height: fit-content;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
`;

export default Select;
