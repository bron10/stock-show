import { RECEIVE_MESSAGE, ActionTypes, GET_MESSAGE } from './types'

export function receiveStockUpdate(newMessage: (string | number)[][]): ActionTypes {
  return {
    type: RECEIVE_MESSAGE,
    payload: newMessage
  }
}

export function getStockUpdate(): ActionTypes {
  return {
    type: GET_MESSAGE,
  }
}
