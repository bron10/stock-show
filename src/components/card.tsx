import React from 'react';
import styled from 'styled-components';
import {CardProps} from '../types';
const CardContent = styled.div`
    background-color: white;
    color : #282c34;
    padding : 2rem;
    margin:1rem;
    width: 300px;
    border-radius : 20px;
`;

const UpArrow = styled.span`
width: 0; 
height: 0; 
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid green;
display:inline-block;
`;

const DownArrow = styled.span`
width: 0; 
height: 0; 
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-top: 10px solid red;
display:inline-block;
`;


function Card({stock}:CardProps) {
    const {name, status, index, updatedAt} = stock;
  return (
    <CardContent className="card">
        <p>{name} {isNaN(status) ? "--" : (status ? <UpArrow /> : <DownArrow />)}</p>
        <p>{index}</p>
        <p>{updatedAt}</p>
            
    </CardContent>
  );
}

export default Card;
