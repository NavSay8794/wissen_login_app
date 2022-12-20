import React from 'react';
import styled from 'styled-components';

const TermsComponent = ()=>{
    return(
        <TermsContainer>
            <h5>By creating or logging into an account, you
             <br /> are agreeing with our <a href='/'>Terms & conditions</a>
             <br /> and <a href='/'>Privacy Policies</a>
             </h5>
        </TermsContainer>
    )
}

const TermsContainer = styled.div`
  
    h5{
        color : #808080;
        font-weight: 500;
        margin: 0;
    }
`;

export default TermsComponent