import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../reducers/chatReducer';
import settingsReducer from '../reducers/settingsReducer';
import loginMiddleware from './middlewares/loginMiddleware';
import socketMiddleware from './middlewares/socketMiddleware';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    settings: settingsReducer,
  },
  middleware: [
    loginMiddleware,
    socketMiddleware,
  ],
});

export default store;
