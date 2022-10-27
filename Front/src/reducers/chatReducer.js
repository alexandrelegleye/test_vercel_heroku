import { actionTypeAddMessage, actionTypeSendMessage } from '../actions/chatActions';

const chatInitialState = {
  messages: [],
  isLoading: false,
};

function chatReducer(oldState = chatInitialState, action = {}) {
  switch (action.type) {
    case actionTypeAddMessage: {
      return {
        ...oldState,
        messages: [
          ...oldState.messages,
          action.payload,
        ],
        isLoading: false,
      };
    }
    case actionTypeSendMessage: {
      return {
        ...oldState,
        isLoading: true,
      };
    }

    default:
      return oldState;
  }
}
export default chatReducer;
