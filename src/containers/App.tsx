import React, {useEffect, Dispatch} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CardList from '../components/card-list';
import {getStockUpdate} from '../store/stock/actions'
import {ActionTypes} from '../store/stock/types';
import Disconnected from '../components/disconnected';
import {AppProps} from '../types';

const AppBg = styled.div`
  text-align: center;
`
const AppSection = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-top : 2rem;
`
function App({stocks, isDisconnected, getStockUpdate}:AppProps) {
  useEffect(()=>{
    getStockUpdate();
  })  

  return (
    <AppBg>
      {isDisconnected ? <Disconnected /> : null}
      <AppSection>
        <h2>A Realtime Stocks Show</h2>
        <CardList stocks={stocks}/>
      </AppSection>
    </AppBg>
  );
}


const mapStateToProps = (state:any) => {
  return {
    stocks : state.stock,
    isDisconnected : state.connection.isDisconnected
  }
}

const mapDispatchToProps = (dispatch:Dispatch<ActionTypes>) => {
  return {
    getStockUpdate: () => dispatch(getStockUpdate())
  };
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
