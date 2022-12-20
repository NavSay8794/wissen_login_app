import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import TermsComponent from "./TermsComponent";

import axios from "axios";

const FormComponent = () => {
  const baseUrl = "https://reqres.in/api/";

  const navigate = useNavigate();
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

  const showToast = (data) => {
    toast.error({data}, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const login = async (data) => {
    let response = await axios.post(`${baseUrl}login`, data);
    // if(response.response.status === 400){
    //   // showToast(response.response.data.error)
    //   response.response.data
    // }
    navigate("/user", { state: { data: response.data } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };

    login(data);
    setEmail("");
    setPassword("");
    setIsChecked(false)
  };

  useEffect(() => {
    if (isChecked && email !== "") {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [isChecked, email]);

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
              checked = {isChecked}
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
      <ToastContainer />
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
