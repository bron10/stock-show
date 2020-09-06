import { w3cwebsocket as W3CWebSocket } from 'websocket';
export async function getWSConnection() {
  return new W3CWebSocket(`${process.env.REACT_APP_SERVER_URL}`);
}