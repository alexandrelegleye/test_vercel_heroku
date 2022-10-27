import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

import FormSendContainer from './containers/FormSendContainer/FormSendContainer';
import MessagesListContainer from './containers/MessagesListContainer/MessagesListContainer';
import SettingsContainer from './containers/SettingsContainer/SettingsContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <SettingsContainer />
        <MessagesListContainer />
        <FormSendContainer />
      </div>
    </Provider>
  );
}

export default App;
