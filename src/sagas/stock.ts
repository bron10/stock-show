import { put, call, take, takeEvery} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import {GET_MESSAGE} from '../store/stock/types';
import {receiveStockUpdate} from '../store/stock/actions';
import {isDisconnected, reConnect} from '../store/connection/actions';
import { w3cwebsocket as W3CWebSocket } from 'websocket';


function websocketInitChannel() {
    return eventChannel( emitter => {
      // init the connection here
      const client:any =  new W3CWebSocket(`${process.env.REACT_APP_SERVER_URL}`);
      client.onmessage = (e:any) => {
        let payload = null
        try {
            payload = JSON.parse(e.data)
        } catch(e) {
          console.error(`Error parsing : ${e.data}`)
        }
        return emitter(receiveStockUpdate(payload))
      }

      client.onopen = function() {
        console.log('WebSocket Client Connected');
        return emitter(reConnect());
      }

      client.onerror = (e:any) => {
        console.log("Error", e);
        return emitter(isDisconnected())
      }
      
      return () => {
        console.log('Socket off')
      }
    })
  }

function* getStockUpdates() {
  const channel = yield call(websocketInitChannel)
  while (true) {
      const action = yield take(channel);
      yield put(action) 
  }
}

export function* watchStock() {
    yield takeEvery(GET_MESSAGE, getStockUpdates)
}


