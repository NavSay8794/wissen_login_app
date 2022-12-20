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
        <br/>
        <div className="sso">
          <p>Signin with company SSO</p>
        </div>
      </InnerContainer>
    </Container>
  );
};

const InnerContainer = styled.div`
  width: 35%;
  .sso {
    width: 80%;
    color: blue;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
