import React from 'react';

import styled from 'styled-components';

import logo from '../assets/wissenlogo.PNG'

const LogoComponent = ()=>{
    return(
        <Container>
            <img src={logo} alt='Wissen Logo'/>
            <h4>Hello There, Sign In To Continue</h4>
        </Container>
    )
}


const Container = styled.div`
    width: 30vw;
    height: 20vh;
    img{
        width: 50%;
    }
    h4{
        font-weight: 700;
        margin: 0;
        color: #444444
    }
`;

export default LogoComponent