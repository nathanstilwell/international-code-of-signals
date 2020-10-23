import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Flags } from "./components";

const Main = styled.main`
  background-color: navy;
  color: white;
  height: 100%;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 6rem;
  margin: 0;
  padding: 2rem 0;
`;

const App: FunctionComponent = () => {
  return (
    <Main>
      <Heading>International Code of Signals</Heading>
      <Flags />
    </Main>
  );
};

export default App;
