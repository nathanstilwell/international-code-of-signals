import React, { FunctionComponent } from "react";
import styled from "styled-components";
import matches from "lodash/matches";
import cond from "lodash/cond";
import constant from "lodash/constant";

type flagSize = "large" | "medium" | "small";
interface FlagProps {
  code: string;
  label?: string;
  size?: flagSize;
}

const baseAssetsUrl = "https://assets.nathanstilwell.com";
const flagUrl = (code: string) => `${baseAssetsUrl}/flags/ics-${code}.svg`;

const Img = styled.img`
  width: 100%;
`;

const Label = styled.span<{ size: flagSize }>`
  display: inline-block;
  font-family: monospace;
  font-size: ${cond([
    [matches({ size: "large" }), constant("2rem")],
    [matches({ size: "medium" }), constant("1.2rem")],
    [matches({ size: "small" }), constant("0.8rem")],
  ])};
  padding-bottom: 0.5rem;
`;

const Signal = styled.div<{ size: flagSize }>`
  height: auto;
  margin: 1rem 2rem 1rem 1rem;
  width: ${cond([
    [matches({ size: "large" }), constant("8rem")],
    [matches({ size: "medium" }), constant("4rem")],
    [matches({ size: "small" }), constant("2rem")],
  ])};
`;

const Flag: FunctionComponent<FlagProps> = ({
  code,
  label,
  size = "medium",
}) => {
  return (
    <Signal size={size}>
      <Label size={size}>{label}</Label>
      <Img
        src={flagUrl(code)}
        alt={`Flag representing international signal. ${
          label ? `Code: label` : ""
        }`}
      />
    </Signal>
  );
};

export default Flag;
