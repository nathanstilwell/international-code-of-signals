import React from "react";
import styled from "styled-components";

import { Flag } from "./";

const flags = [
  { code: "alpha", label: "Alpha" },
  { code: "bravo", label: "Bravo" },
  { code: "charlie", label: "Charlie" },
  { code: "delta", label: "Delta" },
  { code: "echo", label: "Echo" },
  { code: "foxtrot", label: "Foxtrot" },
  { code: "golf", label: "Golf" },
  { code: "hotel", label: "Hotel" },
  { code: "india", label: "India" },
  { code: "juliet", label: "Juliet" },
  { code: "kilo", label: "Kilo" },
  { code: "lima", label: "Lima" },
  { code: "mike", label: "Mike" },
  { code: "november", label: "November" },
  { code: "oscar", label: "Oscar" },
  { code: "papa", label: "Papa" },
  { code: "quebec", label: "Quebec" },
  { code: "romeo", label: "Romeo" },
  { code: "sierra", label: "Sierra" },
  { code: "tango", label: "Tango" },
  { code: "uniform", label: "Uniform" },
  { code: "victor", label: "Uniform" },
  { code: "whiskey", label: "Uniform" },
  { code: "x-ray", label: "X-ray" },
  { code: "yankee", label: "Yankee" },
  { code: "zulu", label: "Zulu" },
];

const Flags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <Flags>
    {flags.map((flag) => (
      <Flag {...flag} size="medium" key={flag.code} />
    ))}
  </Flags>
);
