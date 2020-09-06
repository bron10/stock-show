import { RECONNECT, DISCONNECTED , ActionTypes} from './types'

export function isDisconnected() : ActionTypes {
  return {
    type: DISCONNECTED,
  }
}

export function reConnect() : ActionTypes {
  return {
    type: RECONNECT,
  }
} 