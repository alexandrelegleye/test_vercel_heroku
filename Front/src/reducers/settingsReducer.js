import { actionTypeLogin } from '../actions/settingsActions';

const initialState = {
  isConnected: false,
  connectedEmail: undefined,
  connectedPseudo: undefined,
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case actionTypeLogin:
      return {
        ...state,
        isConnected: true,
        connectedEmail: payload.email,
        connectedPseudo: payload.pseudo,
      };

    default:
      return state;
  }
};
