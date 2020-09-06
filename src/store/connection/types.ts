export const DISCONNECTED = 'DISCONNECTED';
export const RECONNECT = 'RECONNECT';
export interface Connection {
    isDisconnected : boolean,
}

interface disconnectedAction {
    type: typeof DISCONNECTED
}

interface reconnectedAction {
    type: typeof RECONNECT
}

export type ActionTypes = disconnectedAction | reconnectedAction;
