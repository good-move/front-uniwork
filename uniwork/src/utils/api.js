// import {UserType} from "src/Store/model";

class BroadcastApi {

  constructor(onConnect, onDisconnect, onMessage) {
    this.socket = null;
    this.onConnect = onConnect;
    this.onDisconnect = onDisconnect;
    this.onMessage = onMessage;
    this.prefix = '/api/v1/broadcasts';
  }

  join(id = 12, userType) {
    // let prefix = '';
    // if (userType === UserType.CLIENT) {
    //   prefix = '';
    // } else if (userType === UserType.HOST) {
    //   prefix = 'host/';
    // } else {
    //   prefix = '';
    // }

    this.socket = new WebSocket(`ws://localhost:8800/api/chat/websocket/rooms/86cf2b52-8ba7-4f5f-99ce-0d5c74147b0a?$userId=${id}`);
    this.socket.addEventListener('open', this.onConnect);
    this.socket.addEventListener('close', this.onDisconnect);
    this.socket.addEventListener('message', this.onMessage);
    this.socket.addEventListener('error', (error) => {
      console.error('error', error);
    });

    return this;
  }

  joinHost(bcastId) {
    // return this.join(bcastId, UserType.HOST);
  }

  joinClient(bcastId) {
    // return this.join(bcastId, UserType.CLIENT);
  }

  leave() {
    this.socket.close();
  }

  sendText(text) {
    this.socket.send(text);

    return this;
  }

  syncNextPage() {
    this.sendText(JSON.stringify({id: 'NEXT_PAGE'}));
  }

  syncPreviousPage() {
    this.sendText(JSON.stringify({id: 'PREVIOUS_PAGE'}));
  }

}

export default BroadcastApi;
