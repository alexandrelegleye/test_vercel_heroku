export const actionTypeSendMessage = 'CHAT/SEND_MESSAGE';
export const actionTypeAddMessage = 'CHAT/ADD_MESSAGE';

export function getActionAddMessage(message) {
  return {
    type: actionTypeAddMessage,
    payload: message,
  };
}

export function getActionSendMessage(author, text) {
  return {
    type: actionTypeSendMessage,
    payload: {
      author, text,
    },
  };
}
