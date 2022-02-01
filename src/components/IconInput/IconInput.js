import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";



const SIZES = {
  large: {
    fontSize: 18,
    iconSize: 24,
    lineWeight: 2,
    inlinePadding: "12px",
    height: "36px",
  },
  small: {
    fontSize: 16,
    iconSize: 14,
    lineWeight: 1,
    inlinePadding: "8px",
    height: "24px",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  const sizeValues = SIZES[size];
  const styleProps = {
    "--input-width": width + "px",
    "--font-size": sizeValues.fontSize / 16 + "rem",
    "--line-weight": sizeValues.lineWeight + "px",
    "--icon-size": sizeValues.iconSize + "px",
    "--inline-padding": sizeValues.inlinePadding,
    "--height": sizeValues.height,
  };

  return (
    <IconInputWrapper style={styleProps}>
      <InputIcon>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon
          id={icon}
          size={sizeValues.iconSize}
          lineWeight={sizeValues.lineWeight}
        />
      </InputIcon>
      <Input placeholder={placeholder} />
    </IconInputWrapper>
  );
};

const IconInputWrapper = styled.label`
  display: inline-block;
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  height: var(--icon-size);
  margin: auto;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: var(--input-width);
  padding: 0;

  font-size: var(--font-size);
  line-height: var(--height);
  height: var(--height);
  color: inherit;
  font-weight: 700;

  padding: 0 var(--inline-padding);
  padding-inline-start: calc(var(--icon-size) + var(--inline-padding));
  border-radius: 0;
  border: none;
  border-bottom: solid var(--line-weight) ${COLORS.black};

  outline-offset: 4px;

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
