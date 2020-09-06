import React from 'react';
import styled from 'styled-components';

const ErrorBox =  styled.p`
    position : absolute;
    color : red;
    padding : 0.5rem;
    margin:0;
    background:white;
    width:100%;
`

const Disconnected = () => (
    <ErrorBox>
        Please be with us until we reconnect...
    </ErrorBox>
);
export default Disconnected