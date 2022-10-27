import { io } from 'socket.io-client';
import { actionTypeSendMessage, getActionAddMessage } from '../../actions/chatActions';
import { actionTypeLogin } from '../../actions/settingsActions';

let socket;

const socketMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case actionTypeLogin: {
      // des qu'il recoit l'action login, il lance la connection du socket
      socket = io('https://chatroomlegleye.herokuapp.com/');

      // le back m'envoie un evenement 'send_message', cela veut dire que quelqu'un a envoyer un message au back
      // (ce quelqu'un ca peut être moi)
      socket.on('send_message', (message) => {
        store.dispatch(getActionAddMessage(message));
      });
      break;
    }

    case actionTypeSendMessage: {
      // si le socket est bien defini et donc connecté
      if (!socket) {
        break;
      }

      console.log('emit message');
      // on envoi un evenement de type 'send_message' au back
      socket.emit('send_message', {
        text: action.payload.text,
        author: action.payload.author,
      });
      // on envoie pas l'action SEND_MESSAGE dans le reducer
      break;
    }
    default:
  }
  next(action);
};

export default socketMiddleware;
