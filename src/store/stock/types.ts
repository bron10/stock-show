// const stocks: (string | number)[][] = [];

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const GET_MESSAGE = 'GET_MESSAGE'

export interface Stock {
    name : string,
    status : number,
    updatedAt : string,
    index : number,
    rawDate : number 
}

interface ReceiveMessageAction {
    type: typeof RECEIVE_MESSAGE
    payload: (string | number)[][]
}

interface getMessageAction {
    type: typeof GET_MESSAGE    
}
export type ActionTypes = ReceiveMessageAction | getMessageAction;
