import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import TermsComponent from "./TermsComponent";

import axios from 'axios'

const FormComponent = () => {
  const baseUrl = 'https://reqres.in/api/';

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const login = async (data)=>{
    let response = await axios.post(`${baseUrl}login` , data)
    navigate('/user', {state: {data: response.data}})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password
    }

    login(data)
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isChecked && email !== '' && password !== '') {
      setIsEnabled(true);
    }else{
      setIsEnabled(false)
    }
  }, [isChecked]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputComponent
          types="email"
          value={email}
          handler={handleEmailChange}
        />
        <br />
        <InputComponent
          types="password"
          value={password}
          handler={handlePasswordChange}
        />
        <br />
        <div className="terms">
          <div className="checkbox">
            {/* <InputComponent types="checkbox" /> */}
            <input
              type="checkbox"
              onChange={toggleCheckbox}
              style={{ width: "20px", margin: 0 }}
            />
          </div>
          <div className="reads">
            <TermsComponent />
          </div>
        </div>
        <ButtonComponent enabled={isEnabled} />
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  .terms {
    display: flex;
    .checkbox {
      flex: 1;
      padding-top: 3px;
      display: flex;
      height: 1rem;
    }
    .reads {
      flex: 14;
      padding: 0;
    }
  }
`;

export default FormComponent;
