import React from "react";
import styled from "styled-components";

const InputComponent = ({ types ,value , handler }) => {
  return (
    <InputContainer>
      <div className="label">
        <label htmlFor={types}>{types === 'email' || types === 'password' ? types: ''}</label>
      </div>
      <div>
        <input type={types} id={types} name={types} value={value} onChange = {handler}  />
        {/* {types==='password' ? <span className="p-viewer"><i className="far fa-eye" id="togglePassword" style={{marginRight: "30px" , cursor: "pointer"}}></i></span> : ''} */}
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  .label {
    margin: 5px 0;
    label{
        text-transform: capitalize;
        font-weight: 500;
        color: gray;
    }
  }
  input {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1rem;
    border: 1px solid lightgray;
    border-radius: 8px;
    width:70%;

    &:focus{
        outline: none;
    }
  }
  .p-viewer {
    z-index: 9999;
    position: relative;
    top: -50%;
    right: -70%;
}
`;
export default InputComponent;
