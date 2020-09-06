import React from 'react';
import styled from 'styled-components';
import Card from './card';
import {CardListProps} from '../types';
const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
`
function CardList({stocks}:CardListProps) {
	return (
		<Container>
			{stocks.map((stock:any, index:number) => 
				(<Card stock={stock} key={index}/>)
			)}
		</Container>
	);
}

export default CardList

