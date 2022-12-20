import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useLocation } from "react-router-dom";
import axios from "axios";

const DashboardComponent = () => {
  const baseUrl = "https://reqres.in/api/unknown";

  const [users, setUsers] = useState([]);

  const location = useLocation();

  const getUsers = async (token) => {
    let userList = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    setUsers(userList.data.data)
  };

  useEffect(() => {
    getUsers(location.state.data.token);
  }, []);

  return (
    <Container>
      <InnerContainer>
        Welcome to Dashboard Component
       {users.map((user)=>{
        return <p>{user.name}</p>
       })}
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
export default DashboardComponent;
