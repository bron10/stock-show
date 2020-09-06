
import {
    DISCONNECTED,
    RECONNECT,
    Connection,
    ActionTypes
  } from './types'
  const initialState : Connection = {
    isDisconnected : false
  }
  
  export function connectionReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case DISCONNECTED:
        return {...state, ...{isDisconnected : true}}
    case RECONNECT:
        return {...state, ...{isDisconnected : false}}
          
      default:
        return state
    }
  }