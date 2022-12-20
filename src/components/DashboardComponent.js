import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLocation } from "react-router-dom";
import axios from "axios";

const DashboardComponent = () => {
  const baseUrl = "https://reqres.in/api/unknown";
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const showToast = () => {
    toast.success("Login Successful", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const getUsers = async (token) => {
    let userList = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log(userList.data.data);
    setUsers(userList.data.data);
  };

  useEffect(() => {
    showToast();
    getUsers(location.state.data.token);
  }, []);

  return (
    <Container>
      <InnerContainer>
        <ToastContainer />
        <h1>Dear User, Welcome to Dashboard</h1>
        <br />
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Pantone Value</th>
            <th>Year</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name.split(' ').map((word) => {
                    return word[0].toUpperCase() + word.substring(1); 
                    }).join(" ")}</td>
                <td>{user.color}</td>
                <td>{user.pantone_value}</td>
                <td>{user.year}</td>
              </tr>
            );
          })}
        </table>
      </InnerContainer>
    </Container>
  );
};

const InnerContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: #808080
  }
  table {
    border: 2px solid #808080;
    width: 100%;
    height: 200px;

    th {
      border-bottom: 1px solid black;
    }

    td {
      text-align: center;
    }
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
export default DashboardComponent;
