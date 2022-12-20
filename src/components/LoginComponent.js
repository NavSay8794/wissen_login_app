import React from "react";
import styled from "styled-components";
import FormComponent from "./FormComponent";
import LogoComponent from "./LogoComponent";

const LoginComponent = () => {
  return (
    <Container>
      <InnerContainer>
        <LogoComponent />
        <FormComponent />
      </InnerContainer>
    </Container>
  );
};

const InnerContainer = styled.div`
    width: 35%;
`;
const Container = styled.div`
  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-weight: normal;
`;

export default LoginComponent;
