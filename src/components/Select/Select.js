import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectValue aria-hidden="true">{displayedValue}</SelectValue>
      <SelectIcon>
        <Icon id="chevron-down" size="1.4em" strokeWidth={2} />
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
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 8px;

  padding: 12px 16px;
  font-size: 1rem;

  white-space: nowrap;

  &:focus-within {
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

  opacity: 0;

  &::-ms-expand {
    display: none;
  }
`;

const SelectValue = styled.div`
  display: inline-block;
`;

const SelectIcon = styled.div`
  display: inline-block;
  margin: -0.4em 0 -0.4em 20px;
`;

export default Select;
