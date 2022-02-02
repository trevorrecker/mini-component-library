import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--border-radius": "4px",
    "--bar-height": "8px",
    "--bar-padding": "",
  },
  medium: {
    "--border-radius": "4px",
    "--bar-height": "12px",
    "--bar-padding": "",
  },
  large: {
    "--border-radius": "8px",
    "--bar-height": "16px",
    "--bar-padding": "4px",
  },
};

const ProgressBar = ({ value, size = "medium", ...delegated }) => {
  return (
    <BarWrapper
      style={SIZES[size]}
      {...delegated}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <InnerBar>
        <BarFill value={value} />
      </InnerBar>
    </BarWrapper>
  );
};

const BarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--bar-padding);
`;

const InnerBar = styled.div`
  display: block;
  position: relative;
  border-radius: 4px;

  width: 100%;
  height: var(--bar-height);

  /* Trim inner progress bar and maintain border rounding as the bar fills */
  overflow: hidden;
`;

const BarFill = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: ${(props) => props.value + "%"};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
