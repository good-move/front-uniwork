import * as ActionType from './actionTypes';
// import { MessageType, } from 'src/Store/model'
import BroadcastApi from '../../utils/api';

let api = null;

const onMessage = dispatch => msgEvent => {
  const message = JSON.parse(msgEvent.data);
  console.log('message received: ' + message.id);


  // if (Object.keys(MessageType).includes(message.id)) {
  //   dispatch({
  //     type: message.id,
  //     message: message,
  //   });
  // }
};

const onDisconnect = dispatch => (code, reason) => {
  console.log("disconnected", code, reason);
  dispatch({
    type: ActionType.DISCONNECTED
  });
};

const joinBroadcast = (bcastId, userType) => dispatch => {
  dispatch({
    type: ActionType.JOINING
  });

  return new Promise((resolve, reject) => {
    api = new BroadcastApi(resolve, onDisconnect(dispatch), onMessage(dispatch));
    api.join(bcastId, userType);
  }).then(_ =>
    dispatch({
      type: ActionType.JOINED
    })
  ).catch(e => {
    console.error(e);
  });
};


const storeFile = file => dispatch => {
  // dispatch({
  //   type: ActionType.STORE_FILE,
  //   file: file,
  // });
};

const syncNextPage = () => _ => {
  api.syncNextPage();
};

const syncPreviousPage = () => _ => {
  api.syncPreviousPage();
};

export {
  joinBroadcast,
  storeFile,
  syncNextPage,
  syncPreviousPage,
};
