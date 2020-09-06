
import {
    ActionTypes,
    RECEIVE_MESSAGE,
  } from './types'
  import {formatStockData} from '../../services/helper';
  const initialState : any= []
  
  export function stockReducer(
    state = initialState,
    action: ActionTypes
  ): any {
    switch (action.type) {
      case RECEIVE_MESSAGE:
        return [...formatStockData(state)(action.payload)]
      
      default:
        return state
    }
  }