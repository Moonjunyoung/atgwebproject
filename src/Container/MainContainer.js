import React from "react";
import Container from "@material-ui/core/Container";
import ComponentNameListView from "../Components/ComponentNameListView";
import ComponentFailureOptionView from "../Components/ComponentFailureOptionView";
import ComponentDegradationMechanism from "../Components/ComponentDegradationMechanism";
import ComponentDegradationInfluence from "../Components/ComponentDegradationInfluence";
import ComponentDiscoveryMethods from "../Components/ComponentDiscoveryMethods";
import ComponentResultView from "../Components/ComponentResultView";

import "../css/MainContainer.css";

import styled, { css } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: grey;
`;

const MainContainer = () => {
  return (
    <>
      <Title>PMBD Data View</Title>
      <ComponentNameListView />
      <Container id="Mainroot-box">
        <ComponentFailureOptionView />
        <ComponentDegradationMechanism />
        <ComponentDegradationInfluence />
        <ComponentDiscoveryMethods />
      </Container>

      <Container>
        <ComponentResultView></ComponentResultView>
      </Container>
    </>
  );
};

export default MainContainer;
