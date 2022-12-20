import React from "react";

import styled from "styled-components";

const ButtonComponent = ({enabled}) => {
  return (
    <ButtonContainer>
      <button style={{color: enabled ? 'lightgray': 'blue'  , backgroundColor : enabled ? 'blue': 'lightgray'}}>Next</button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bolder;
    font-size: 1.05rem;
    width: 78%;
    height: 8vh;
    margin: 30px 0;
  }
`;

export default ButtonComponent;
